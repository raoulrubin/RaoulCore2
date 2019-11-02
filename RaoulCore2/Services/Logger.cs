using System;
namespace RaoulCore2.Services
{
    public static class Logger
    {
        public static void LogError( string where, Exception ex )
        {
            Console.WriteLine("\nException Caught!");
            Console.WriteLine("Message :{0} ", ex.Message);
        }
    }
}
