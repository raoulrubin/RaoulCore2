import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../services/location-service'
import { WeatherData, Condition } from '../models/weather-data';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather-service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @ViewChild("locations", { static: true }) locations: HTMLElement;

  dropDownItems: string[] = ["Durham,US", "San Francisco,US", "Manhattan,US", "Chicago,US",
    "Miami,US", "Fairbanks,US", "Honolulu,US"];

  http: HttpClient;
  weather: WeatherData;
  latitude: number;
  longitude: number;

  constructor(private weatherSvc: WeatherService, private loc: LocationService) {

    this.weather = new WeatherData();

    loc.getLocation((p: Position) => {
      this.dropDownItems.unshift("Current Location");
      this.latitude = p.coords.latitude;
      this.longitude = p.coords.longitude;
    });
  };

  select(e: any): void {
    const text = e.srcElement.innerText;

    let req = this.getServiceRequest(text);
    req.subscribe(result => {
      this.setWeather(result)
      console.log('result : ' + result);
    }, error => {
      console.log(error);
    });
  }

  getServiceRequest(text): Observable<WeatherData> {

    let req: Observable<WeatherData>;
    if (text == "Current Location") {
      req = this.weatherSvc.getWeatherByCoordiate(this.latitude, this.longitude);
    } else {
      req = this.weatherSvc.getWeatherByCity(text);
    }
    return req;
  }

  setWeather(w: WeatherData): void {
    this.weather = this.toFahrenheit(w);
  }

  toFahrenheit(w: WeatherData): WeatherData {
    w.tempCurrent = this.cToF(w.tempCurrent);
    w.tempHigh = this.cToF(w.tempHigh);
    w.tempLow = this.cToF(w.tempLow);
    return w;
  }

  cToF(tc: number): number {
    return (tc * 9 / 5) + 32
  }

}