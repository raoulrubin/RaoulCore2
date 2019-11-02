export class WeatherData {
  constructor(obj : any) {
    if (obj != null){
      this.load(obj);
    }
   }
  load(obj: any) {
    let w = obj.weather[0];
    this.description = w.description;
    this.main = w.main;
    let m = obj.main;
    this.temp = this.kToF(m.temp);
    this.pressure = m.pressure;
    this.where = obj.name;
  }
  kToF(strK: string): number {
    let k: number = parseFloat(strK);
    return Math.round((k - 273.15) * 9 / 5 + 32);
  }
  public where: string = 'unknown';
  public main: string;
  public description: string = 'unknown';
  public temp: number = 0;
  public pressure: string = "0";
}
