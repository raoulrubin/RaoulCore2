using Microsoft.AspNetCore.Mvc;
using RaoulCore2.Interfaces;
using System.Threading.Tasks;

namespace RaoulCore2.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public readonly IWeatherService _weatherService;

        /// <summary>
        /// User constructor injection
        /// </summary>
        /// <param name="svc"></param>
        public SampleDataController(IWeatherService svc)
        {
            _weatherService = svc;
        }

        /// <summary>
        /// Get weather data by city
        /// </summary>
        /// <param name="city">Durham,US</param>
        /// <returns>serialized JSON</returns>
        [HttpGet("[action]")]
        public async Task<string> GetWeatherDataByCity(string city)
        {
            var res = _weatherService.GetWeatherData(city);
            return await res;
        }

        /// <summary>
        /// Get weather data by coordinates
        /// </summary>
        /// <param name="latitude"></param>
        /// <param name="longitude"></param>
        /// <returns>serialized JSON</returns>
        [HttpGet("[action]")]
        public async Task<string> GetWeatherDataByCoordinate(string latitude, string longitude)
        {
            var res = _weatherService.GetWeatherData(latitude, longitude);
            return await res;
        }
    }
}
