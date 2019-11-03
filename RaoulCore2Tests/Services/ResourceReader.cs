using System.IO;
using System.Reflection;

namespace RaoulCore2.Services.Tests
{
    public static class ResourceReader
    {
        public static string ReadFile(string fileName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceName = "RaoulCore2Tests.data." + fileName;

            using (Stream stream = assembly.GetManifestResourceStream(resourceName))
            {
                if (stream != null)
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        return reader.ReadToEnd();
                    }
                }
            }
            return null;
        }
    }
}