using Microsoft.VisualStudio.TestTools.UnitTesting;
using RaoulCore2.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace RaoulCore2.Services.Tests
{
    [TestClass()]
    public class WeatherServiceTests
    {
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