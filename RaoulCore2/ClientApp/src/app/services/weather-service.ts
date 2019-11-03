import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/weather-data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class WeatherService {
    baseUrl : string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this.baseUrl = baseUrl;
  }
  
  getWeatherByCity(city: string): Observable<WeatherData> {
    const request = "GetWeatherDataByCity?" + "city=" + city;
    return this.requestWeather(request);
  }
  getWeatherByCoordiate(latitude: number, longitude: number): Observable<WeatherData> {
    const request = "GetWeatherDataByCoordinate?latitude=" +
      latitude.toFixed(3) + "&longitude=" +
      longitude.toFixed(3);
    return this.requestWeather(request);
  }
  requestWeather(urlNav: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.baseUrl + "api/SampleData/" + urlNav);
  }
}
