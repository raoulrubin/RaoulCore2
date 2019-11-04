using RaoulCore2.Services;

namespace RaoulCore2.Interfaces
{
    /// <summary>
    /// Simplified service response
    /// </summary>
    public interface IWeatherData
    {
        Condition[] conditions { get; }
        string country { get; }
        string details { get; }
        string error { get; }
        string localTime { get; }
        string location { get; }
        int percentHumidity { get; }
        int tempCurrent { get; }
        int tempHigh { get; }
        int tempLow { get; }
        string wind { get; }

        string ToJson();
    }
}