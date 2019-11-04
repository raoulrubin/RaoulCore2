using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace RaoulCore2.Services.Tests
{

    [TestClass()]
    public class WeatherServiceTests
    {
        private IConfiguration _configuration;

        [TestInitialize]
        public void Init()
        {
            // build a config file
            IConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.AddJsonFile("AppSettings.json");
            _configuration = configurationBuilder.Build();
        }

        [TestMethod()]
        public async System.Threading.Tasks.Task GetServiceRequest()
        {

            var svc = new WeatherService(_configuration);

            var res = svc.GetWeatherData("Durham,US");

            var jr = await res;

            Assert.IsNotNull(jr);

            //Assert.IsNotNull(jr.);


        }

        [TestMethod()]
        public async System.Threading.Tasks.Task GetWeatherTestAsync()
        {
            var svc = new WeatherService(_configuration);

            var res = svc.GetWeatherData("Durham,US");

            var weather = await res;

            Assert.IsNotNull(res);

        }
    }
}