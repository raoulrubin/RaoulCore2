import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location-service'
import { WeatherData } from '../weather-data';

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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, loc : LocationService) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.weather = new WeatherData(null);
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
    debugger;
    if (text == "Current Location"){
      this.getWeatherByCoord();
      return;
    }
    this.getWeather( "city=" + text );
  }

  getWeatherByCoord() : void {
    const what = this.latLon();
    this.http.get<string>(this.baseUrl + "api/SampleData/WeatherByCoord?" + what).subscribe(result => {
      this.weather = new WeatherData(result);
      console.log('result : ' + result);
    }, error => console.error(error));
  }

  getWeather( what : string) : void {
    this.http.get<string>(this.baseUrl + "api/SampleData/WeatherByCity?" + what).subscribe(result => {
      this.weather = new WeatherData(result);
      console.log('result : ' + result);
    }, error => console.error(error));
  }

  parseResult( json : string ) : void {
    //var obj : any = JSON.parse(json);
    this.weather.load(json);
  }

  parseWeather( obj : any) : void {

  }
}


