namespace RaoulCore2.Services
{
    public class Condition
    {
        public Condition( string condition, string detail)
        {
            this.description = condition;
            this.detail = detail;
        }
        public string description { get; }
        public string detail { get; }
    }
}
