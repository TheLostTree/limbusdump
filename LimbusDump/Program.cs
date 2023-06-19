// See https://aka.ms/new-console-template for more information

using System.Reflection;
using System.Text;
using LimbusDump;
using Mono.Cecil;
using Mono.Cecil.Rocks;
using Server;
using TypeAttributes = Mono.Cecil.TypeAttributes;

public class Program
{
    public static void Main(string[] args)
    {
        Run(args);
        // Run2();
    }
    
    
    
    static string Path = """F:\SteamLibrary\steamapps\common\Limbus Company\DumpLMAO\Unhollowed\""";

    public static string getFixedIl2CppName(string fullName)
    {
        var f = fullName.Replace("Il2CppSystem", "System");
        f = f.Replace("UnhollowerBaseLib.Il2CppStructArray", typeof(Array).FullName);
        return f;
    }
    

    private class UnhollowedAssemblyResolver : DefaultAssemblyResolver
    {
        readonly IDictionary<string, AssemblyDefinition> cache;
        public UnhollowedAssemblyResolver ()
        {
            cache = new Dictionary<string, AssemblyDefinition> (StringComparer.Ordinal);
        }
        public override AssemblyDefinition Resolve (AssemblyNameReference name)
        {
            // Console.WriteLine($"Resolving {name.FullName}");
            AssemblyDefinition assembly;
            if (cache.TryGetValue(name.FullName, out assembly))
            {
                // Console.WriteLine($"Resolved {name.FullName}");
                return assembly;
            }


            try
            {
                assembly = base.Resolve(name);
            }
            catch
            {
                var unhollowedPath = Path + name.Name + ".dll";
                if (File.Exists(unhollowedPath))
                {
                    assembly = AssemblyDefinition.ReadAssembly(unhollowedPath);
                }
            }
            cache [name.FullName] = assembly;
            // Console.WriteLine($"Resolved {name.FullName}");

            return assembly;
        }
    }
    
    public static void Run(string[] args)
    {
        AssemblyDefinition def = AssemblyDefinition.ReadAssembly(Path + "Assembly-CSharp.dll", new ReaderParameters()
        {
            ReadingMode = ReadingMode.Deferred,
            AssemblyResolver = new UnhollowedAssemblyResolver()
        });
        
       
        // command name, reqpacket, respacket
        List<(string, string, string)> httpCommandList = new();

        
        /*
switch (type)
{
    case "System.Boolean":
        return "boolean";
    case "System.Byte":
    case "System.SByte":
    case "System.UInt16":
    case "System.Int16":
    case "System.UInt32":
    case "System.Int32":
    case "System.UInt64":
    case "System.Int64":
    case "System.Single":
    case "System.Double":
        return "number";
    case "System.String":
    case "System.DateTime":
        return "string";
    default:
        return type.Replace("Server.", "");
}
         */
        List<string> definedTypes = new()
        {
            "System.String",
            "System.Int32",
            "System.Int64",
            "System.UInt32",
            "System.UInt64",
            "System.Boolean",
            "System.Single",
            "System.Double",
            "System.Byte",
            "System.SByte",
            "System.UInt16",
            //datetime
            "System.DateTime",
            //dayofweek etc
        };
        
        
        Queue<TypeDefinition> typeQueue = new();
        HashSet<TypeDefinition> typeSet = new();
        
        
        HashSet<ClassLmao> classLmaos = new();
        

        foreach (TypeDefinition type in def.MainModule.Types.Where(x=>x.Namespace == "Server"))
        {
            // classes that inherit from HttpRequestCommand
            if (type.BaseType.Name.Contains("HttpRequestCommand"))
            {
                var s = new List<string>{ type.Name };
                // Console.WriteLine(string.Join(", ", type.BaseType.Select(x=>x.Name)));
                if (!type.BaseType.IsGenericInstance)
                {
                    continue;
                }

                var genericType = (GenericInstanceType)type.BaseType;
                foreach (var baseTypeGenericArguments in genericType.GenericArguments)
                {
                    var t = baseTypeGenericArguments.Resolve();
                    if (t is not null)
                    {
                        if (!typeSet.Contains(t))
                        {
                            typeQueue.Enqueue(t);
                            typeSet.Add(t);
                        }
                        
                    }
                    else
                    {
                        Console.WriteLine(baseTypeGenericArguments.Name);
                    }

                    s.Add(baseTypeGenericArguments.Name);
                }

                httpCommandList.Add((s[0], s[1], s[2]));
            }
        }
        




        return;
        while (true)
        {
            if (typeQueue.Count == 0)
            {
                break;
            }

            var type = typeQueue.Dequeue();
            typeSet.Remove(type);


            if (type is null)
            {
                continue;
            }

            
            
            //hasthis == instance field
            var fields = type.Fields.Where(x => !x.IsStatic);
            var props = type.Properties.Where(x => x.HasThis);
            
            // if(type.IsValueType)
            // {
            //     fieldTypes
            // }
            var fixedName = getFixedIl2CppName(type.FullName);
            
            
            if(definedTypes.Contains(fixedName)){continue;}
            IEnumerable<(string Name, TypeReference, IMemberDefinition)> fieldsOrProps = null;

            try
            {
                fieldsOrProps  = type.IsValueType
                    ? fields.Select(x => (x.Name, x.FieldType, x as IMemberDefinition))
                    : props.Select(x => (x.Name, x.PropertyType, x as IMemberDefinition));
            }
            catch(Exception e)
            {

                Console.WriteLine(":(");
            }

            
            if (fieldsOrProps.All(x => definedTypes.Contains(getFixedIl2CppName(x.Item2.FullName))))
            {
                definedTypes.Add(fixedName);
                Console.WriteLine($"defined {fixedName}");

                var classIsSerializable = (type.Attributes & TypeAttributes.Serializable) != 0; 
                
                if(!classIsSerializable) continue;
                if (type.Name == "ResPacket_TryToSecede")
                {
                    _ = 1;
                }
                var classLmao = new ClassLmao(type.Name);
                foreach (var prop in fieldsOrProps)
                {
                    var tdef = prop.Item2.Resolve() as TypeDefinition;

                    bool propIsSerializeField = false;
                    if (type.IsValueType)
                    {
                        var fieldref = prop.Item3 as FieldReference;
                        propIsSerializeField = fieldref.Resolve().CustomAttributes
                            .Any(x => x.AttributeType.Name.Contains("SerializeField"));
                    }
                    else
                    {
                        var propref = prop.Item3 as PropertyReference;
                        propIsSerializeField = propref.Resolve().CustomAttributes
                            .Any(x => x.AttributeType.Name.Contains("SerializeField"));
                    }
                    
                    
                    if(classIsSerializable)
                    {
                        classLmao.AddField(prop.Name, prop.Item2.FullName);
                    }else if (!propIsSerializeField)
                    {
                        Console.WriteLine($"class {fixedName} field {prop.Name} is not serialized?");

                    }
                    else
                    {
                        classLmao.AddField(prop.Name, prop.Item2.FullName);

                    }
                    
                    
                    
                }

                classLmaos.Add(classLmao);
                continue;
            }


            List<string> missing = new List<string>();
            foreach (var field in fieldsOrProps)
            {

                var fieldTypeFullName = getFixedIl2CppName(field.Item2.FullName);

                var fieldType = field.Item2;
                
                if (!definedTypes.Contains(fieldTypeFullName))
                {
                    missing.Add(fieldTypeFullName);
                    if (Assembly.GetCallingAssembly().GetType(fieldTypeFullName) is not null)
                    {
                        //its defined somehow?
                        definedTypes.Add(fieldTypeFullName);
                        Console.WriteLine($"balls:  {fieldTypeFullName}");
                    }
                    //is a list or something?
                    else if (fieldTypeFullName.Contains("`"))
                    {
                        var generic = (GenericInstanceType)fieldType;

                        var genericArgumentTypes = generic.GenericArguments.Select(x => x.Resolve()).ToList();
                        //if all of the element types are defined already, just add mark the current type as defined!
                        if (genericArgumentTypes.All(x => definedTypes.Contains(x.FullName)))
                        {
                            definedTypes.Add(fieldTypeFullName);
                        }
                        else
                        {
                            //add only the missing ones
                            foreach (var genericArgumentType in genericArgumentTypes)
                            {
                                if (definedTypes.Contains(genericArgumentType.FullName) ||
                                    typeSet.Contains(genericArgumentType)) continue;
                                
                                
                                typeQueue.Enqueue(genericArgumentType);
                                typeSet.Add(genericArgumentType);
                            }
                        }

                    }
                    else
                    {
                        //queue it back in

                        var rawType = fieldType.Resolve() as TypeDefinition;
                        if (!typeSet.Contains(rawType))
                        {
                            typeQueue.Enqueue(rawType);
                            typeSet.Add(rawType);
                        }
                    }
                }
            }
            if (!typeSet.Contains(type))
            {
                Console.WriteLine($"Skipping type {type.FullName}; missing definitions of {string.Join(", ",missing)}");
                typeQueue.Enqueue(type);
                typeSet.Add(type);
            }

            continue;
        }
        
        Console.WriteLine(typeQueue.Count);
        File.WriteAllLines("""C:\Users\admin\Documents\Github\LimbusDump\LimbusDump\out2.txt""",definedTypes);
        File.WriteAllLines("""C:\Users\admin\Documents\Github\LimbusDump\LimbusDump\out4.txt""",classLmaos.Select(x=>x.ToString()));


        // StringBuilder sb = new StringBuilder();
        // foreach ((string, string ,string) t in httpCommandList)
        // {
        //     var (commandName, reqPacketType, resPacketType) = t;
        //     sb.AppendLine($"// {commandName}: {reqPacketType} -> {resPacketType}");
        //     sb.AppendLine($"class {reqPacketType}{{");
        //     
        // }


    }
}
