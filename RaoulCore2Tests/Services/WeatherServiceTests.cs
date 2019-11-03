using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace RaoulCore2.Services.Tests
{
    [TestClass()]
    public class WeatherServiceTests
    {
        [TestMethod()]
        public async System.Threading.Tasks.Task GetServiceRequest()
        {
            var svc = new WeatherService();

            var res = svc.GetWeatherData("Durham,US");

            var jr = await res;

            Assert.IsNotNull(jr);

            //Assert.IsNotNull(jr.);


        }

        [TestMethod()]
        public async System.Threading.Tasks.Task GetWeatherTestAsync()
        {
            var svc = new WeatherService();

            var res = svc.GetWeather("Durham,US");

            var weather = await res;

            Assert.IsNotNull(res);

        }
    }
}