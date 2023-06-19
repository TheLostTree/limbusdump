using System.Text;

namespace LimbusDump;

public class FieldLmao
{
    public FieldLmao(string name, string type)
    {
        Name = name;
        Type = type;
    }

    public string Name { get; set; }
    public string Type { get; set; }

    public override string ToString()
    {
        return $"{Name}: {Type}";
    }
}
public class ClassLmao
{
    public string Name;
    public ClassLmao(string name)
    {
        Name = name;
    }
    
    private List<FieldLmao> Fields = new();

    public static string CsTypeToTs(string type)
    {

        if (type.Contains('`'))
        {
            var usefulPart = type.Split("`")[1].Split("<");
            var elemCount = int.Parse(usefulPart[0]);
            if (elemCount == 1)
            {
                var elemType = usefulPart[1].Split(">")[0];
                return $"{CsTypeToTs(elemType)}[]";
            }
            else
            {
                Console.WriteLine("UM: " + type);
                return "any[]";
            }
        }
        else if (type.Contains("/"))
        {
            var typeName = type.Split("/").Last();
            return CsTypeToTs(typeName);
        }
        else
        {
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
        }
    }

    public void AddField(string name, string type)
    {
        if (type == "DateUtil") return;
        this.Fields.Add(new FieldLmao(name, CsTypeToTs(type)));
    }
    
    

    public string GenerateFromJson()
    {
        var primives = new []{ "string", "number", "bigint", "boolean", "undefined", "null" , "ELEMENT_TYPE"};
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("\tpublic static fromJSON(json:any){");
        sb.AppendLine($"\t\tlet obj = new {Name}()");
        foreach (var field in Fields)
        {
            if (primives.Contains(field.Type.Replace("[]", "")))
            {
                sb.AppendLine($"\t\tobj.{field.Name} = json.{field.Name}");
            }
            else
            {
                if (field.Type.Contains("[]"))
                {
                    // 
                    sb.AppendLine($"\t\tobj.{field.Name} = Object.values(json.{field.Name}).map(x=> {field.Type.Replace("[]", "")}.fromJSON(x))");
                }                    
                else
                {
                    sb.AppendLine($"\t\tobj.{field.Name} = {field.Type}.fromJSON(json.{field.Name})");
                }
            }
        }

        sb.AppendLine("\t\treturn obj");
        sb.AppendLine("\t}");

        return sb.ToString();
    }

    public string toTypescriptClass()
    {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine($"class {Name} {{");
        foreach (var field in Fields)
        {
            sb.AppendLine($"\tpublic {field.Name}?: {field.Type};");
        }

        sb.AppendLine(GenerateFromJson());
        sb.AppendLine("}");
        return sb.ToString();
    }

    public override bool Equals(object? obj)
    {
        if (obj is not ClassLmao)
        {
            return false;
        }

        var other = (ClassLmao)obj;
        return Name == other.Name;
    }

    protected bool Equals(ClassLmao other)
    {
        return Name == other.Name;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Name, Fields);
    }

    public override string ToString()
    {
        return toTypescriptClass();
    }
}