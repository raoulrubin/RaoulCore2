using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RaoulCore2.Services;

namespace RaoulCore2.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public async Task<string> GetWeatherDataByCity( string city )
        {
            var svc = new WeatherService();
            var res = svc.GetWeatherData(city);
            return await res;
        }

        [HttpGet("[action]")]
        public async Task<string> GetWeatherDataByCoordinate(string latitude, string longitude)
        {
            var svc = new WeatherService();
            var res = svc.GetWeatherData(latitude,longitude);
            return await res;
        }
    }
}
