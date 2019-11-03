namespace RaoulCore2.Services
{
    public class Condition
    {
        public Condition( string condition, string detail)
        {
            description = condition;
            detail = detail;
        }
        public string description { get; }
        public string detail { get; }
    }
}
