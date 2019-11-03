import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { WeatherData, Condition } from "../models/weather-data";
import { Colorizer } from '../utilities/colorizer';

@Component({
  selector: "current-conditions",
  templateUrl: "./conditions.component.svg",
  styleUrls: ["./conditions.component.css"]
})
export class ConditionsComponent implements OnChanges {
  fill = "rgb(255, 0, 0)";
  @Input() data: WeatherData;
  conditions: string;
  currentTemp: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.conditions = "--";
    if (this.data != null) {
      const c = new Colorizer(this.data.tempCurrent);
      this.fill = c.color;
      if (this.data.conditions != null && this.data.conditions.length > 0) {
        this.conditions = this.data.conditions[0].description;
      }
      this.currentTemp = this.data.tempCurrent == null ? "--" : this.data.tempCurrent.toFixed(0).toString();
    }
    else {
      this.fill = 'white';
      this.currentTemp = "";
    }
  }
}

