using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;

namespace RaoulCore2.Services
{
    public class WeatherData
    {
        public WeatherData( string error)
        {
            this.error = error;
        }
        private WeatherData(JToken data)
        {
            try
            {
                location = data["name"].ToString();
                var w = data["weather"];
                conditions = w.Select(c => new Condition(
                    c["main"].ToString(),
                    c["description"].ToString())).ToArray();
                var main = data["main"];
                tempCurrent = KtoC(main["temp"]);
                tempHigh = KtoC(main["temp_max"]);
                tempLow = KtoC(main["temp_min"]);
                var rh = -1;
                int.TryParse(main["humidity"].ToString(), out rh);
                percentHumidity = rh;
                var timezone = data["timezone"].ToString();
                var tz = 0;
                int.TryParse(timezone, out tz);
                var ct = DateTime.UtcNow.AddSeconds(tz);
                localTime = ct.ToString("U");
 
            }
            catch (Exception ex)
            {
                error = ex.Message;
            }
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }


        private int KtoC( JToken jtk)
        {
            if (double.TryParse(jtk.ToString(), out double k))
            {
                return (int)(k - 273.15);
            }
            return int.MinValue;
        }
        public static WeatherData Parse(string json)
        {
            var data = JToken.Parse(json);
            return new WeatherData(data);
        }

        public string location { get; }
        public string country { get; }
        public Condition [] conditions { get; }
        public string details { get; }
        public int tempCurrent { get; }
        public int tempHigh { get; }
        public int tempLow { get; }
        public int percentHumidity { get;  }
        public string wind { get; }
        public string localTime { get; }
        public string error { get; }
    }
}
