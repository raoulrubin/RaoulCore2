using System.Threading.Tasks;

namespace RaoulCore2.Interfaces
{
    public interface IWeatherService
    {
        Task<string> GetWeatherData(string city);
        Task<string> GetWeatherData(string latitude, string longitude);
    }
}