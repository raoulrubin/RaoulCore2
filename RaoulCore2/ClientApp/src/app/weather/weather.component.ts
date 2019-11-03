import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location-service'
import { WeatherData, Condition } from '../weather-data';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @ViewChild("locations", {static : true}) locations : HTMLElement;
  ngOnInit(): void {
  }

  where: string;
  dropDownItems : string[] = ["Durham,US", "San Francisco,US", "Manhattan,US","Chicago,US",
                              "Miami,US", "Fairbanks,US", "Honolulu,US" ];
  position : Position;
  http : HttpClient;
  results: string;
  baseUrl : string;
  weather : WeatherData;
  latitude: number;
  longitude: number;
  condition: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, loc : LocationService) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.weather = new WeatherData();

    loc.getLocation( (p : Position) => {
      this.position = p;
      this.dropDownItems.unshift("Current Location");
      this.latitude = p.coords.latitude;
      this.longitude = p.coords.longitude;
    });
  };

  latLon() : string{
    return "latitude=" + this.latitude.toFixed(2) + "&longitude=" + this.longitude.toFixed(2);
  }

  select( e : any ) : void {
    const text = e.srcElement.innerText;
    if (text == "Current Location"){
      this.getWeatherByCoord();
      return;
    }
    this.getWeather( "city=" + text );
  }

  getWeatherByCoord() : void {
    const what = this.latLon();
    this.http.get<WeatherData>(this.baseUrl + "api/SampleData/GetWeatherDataByCoordinate?" + what).subscribe(result => {
      this.setWeather(result);
      console.log('result : ' + result);
    }, error => console.error(error));
  }

  getWeather( what : string) : void {
    this.http.get<WeatherData>(this.baseUrl + "api/SampleData/GetWeatherDataByCity?" + what).subscribe(result => {
      this.setWeather(result)
      console.log('result : ' + result);
    }, error => {
      console.log(error);
    });
  }

  setWeather( w : WeatherData ) : void{
    this.weather = this.toFahrenheit(w);
  }

  toFahrenheit( w : WeatherData) : WeatherData{
    w.tempCurrent = this.cToF(w.tempCurrent);
    w.tempHigh = this.cToF(w.tempHigh);
    w.tempLow = this.cToF(w.tempLow);
    return w;
  }

  cToF( tc : number ) : number{
    return (tc * 9/5) + 32
  }

}