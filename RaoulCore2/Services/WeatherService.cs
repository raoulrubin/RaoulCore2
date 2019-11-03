using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace RaoulCore2.Services
{
    public class WeatherService
    {

        static readonly HttpClient client = new HttpClient();
        string server = "https://api.openweathermap.org";
        string key = "8eb46f550196144b02b6f784f7665227";

        private string GetUrl( string city )
        {
            return $"{server}/data/2.5/weather?appid={key}&q={city}";
        }

        public async Task<string> GetWeatherData(string city)
        {
            return await ServiceRequest(GetUrl(city));
        }
        public async Task<string> GetWeatherData(string latitude, string longitude)
        {
            return await ServiceRequest(GetUrl(latitude,longitude));
        }

        private string GetUrl(string latitude, string longitude)
        {
            return $"{server}/data/2.5/weather?appid={key}&lat={latitude}&lon={longitude}";
        }

        public async Task<string> GetWeather(string latitude, string longitude)
        {
            return await RequestWeather(GetUrl(latitude, longitude));
        }
        public async Task<string> GetWeather(string city)
        {
            return await RequestWeather(GetUrl(city));
        }

        private async Task<string> ServiceRequest(string url)
        {
            WeatherData result;
            try
            {
                HttpResponseMessage response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                result =  WeatherData.Parse(responseBody);
            }
            catch (HttpRequestException e)
            {
                Logger.LogError("request", e);
                result = new WeatherData(e.Message);
            }
            var json = result.ToJson();
            return json;
        }

        private async Task<string> RequestWeather(string url)
        { 
            // Call asynchronous network methods in a try/catch block to handle exceptions.
            try
            {
                HttpResponseMessage response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                return responseBody;
            }
            catch (HttpRequestException e)
            {
                Logger.LogError("request", e);

            }
            return null;
        }
    }
}
