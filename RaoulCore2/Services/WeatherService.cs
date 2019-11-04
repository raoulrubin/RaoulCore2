using Microsoft.Extensions.Configuration;
using RaoulCore2.Interfaces;
using System.Net.Http;
using System.Threading.Tasks;

namespace RaoulCore2.Services
{
    /// <summary>
    /// Service to get data from weather api
    /// </summary>
    public class WeatherService : IWeatherService
    {
        private readonly string _serverName;
        private readonly string _key;

        public WeatherService(IConfiguration config)
        {
            // get settings from appSettings.json
            _key = config["WeatherApi:key"];
            _serverName = config["WeatherApi:server"];
        }
        static readonly HttpClient client = new HttpClient();

        // build URL string
        private string GetUrl(string city)
        {
            return $"{_serverName}/data/2.5/weather?appid={_key}&q={city}";
        }
        private string GetUrl(string latitude, string longitude)
        {
            return $"{_serverName}/data/2.5/weather?appid={_key}&lat={latitude}&lon={longitude}";
        }

        public async Task<string> GetWeatherData(string city)
        {
            return await ServiceRequest(GetUrl(city));
        }
        public async Task<string> GetWeatherData(string latitude, string longitude)
        {
            return await ServiceRequest(GetUrl(latitude, longitude));
        }

        private async Task<string> ServiceRequest(string url)
        {
            WeatherData result;
            try
            {
                HttpResponseMessage response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                // custom parser
                result = WeatherData.Parse(responseBody);
            }
            catch (HttpRequestException e)
            {
                Logger.LogError("request", e);
                result = new WeatherData(e.Message);
            }
            // serialize to string. (There is probably a better way to pass back data)
            var json = result.ToJson();
            return json;
        }
    }
}
