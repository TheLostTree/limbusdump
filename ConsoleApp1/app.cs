using System.Security.Cryptography;
using System.Text;

namespace ConsoleApp1;

public class app
{
    public static void Main()
    {
        //c86ab0927cfa99c1
        Console.WriteLine(GetPathHash("Lua/Scene/50099/scene50099.lua.MiHoYoBinData").ToString("x8"));
    }
    
    public static ulong GetPathHash(string path)
    {
        byte[] bytes = Encoding.ASCII.GetBytes(path);
        byte[] buffer = new byte[(path.Length >> 8) + 1 << 8];
        Array.Copy(bytes, 0, buffer, 0, bytes.Length);

        using MD5 md5 = MD5.Create();
        byte[] hash = md5.ComputeHash(buffer);

        //var suffix = BitConverter.ToUInt32(hash);
        //var pre = hash[4];

        //return GetPathHash(pre, suffix);

        return BitConverter.ToUInt64(hash);
    }
}