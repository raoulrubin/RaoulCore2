using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace RaoulCore2.Services.Tests
{
    [TestClass()]
    public class WeatherResultsTests
    {
        [TestMethod()]
        public void ParseTest()
        {
            var json = ResourceReader.ReadFile("sample.json");
            var res = WeatherData.Parse(json);
            Assert.IsNotNull(res);
            Assert.IsNull(res.error, res.error);

            Assert.AreEqual("Durham", res.location);

            var conditions = res.conditions;
            Assert.IsNotNull(conditions);

            Assert.AreEqual("Clouds", conditions[0].description);
            Assert.AreEqual("few clouds", conditions[0].detail);

            Assert.AreEqual(8, res.tempCurrent);
            Assert.AreEqual(11, res.tempHigh);
            Assert.AreEqual(5, res.tempLow);
            Assert.AreEqual(76, res.percentHumidity);
            Assert.AreEqual(DateTime.Now.ToString("F"), res.localTime);
        }
    }
}