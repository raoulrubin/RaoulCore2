import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { WeatherData, Condition } from "../weather-data";
import { Colorizer } from '../colorizer';

@Component({
  selector: "current-conditions",
  templateUrl: "./conditions.component.svg",
  styleUrls: ["./conditions.component.css"]
})
export class ConditionsComponent implements OnChanges {
  private fill = "rgb(255, 0, 0)";
  @Input() data: WeatherData;
  conditions: string;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.conditions = "--";
    if (this.data != null) {
      const c = new Colorizer(this.data);
      this.fill = c.color;
      if (this.data.conditions != null && this.data.conditions.length > 0) {
        this.conditions = this.data.conditions[0].description;
      }

    }
    else {
      this.fill = 'white';
    }
  }
}

