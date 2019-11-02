import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { WeatherData } from "../weather-data";
import { Colorizer } from '../colorizer';

@Component({
  selector: "current-conditions",
  templateUrl: "./conditions.component.svg",
  styleUrls: ["./conditions.component.css"]
})
export class ConditionsComponent implements OnChanges {
  private fill = "rgb(255, 0, 0)";
  @Input() data: WeatherData;

  constructor() {

  }
  ngOnChanges(changes : SimpleChanges) : void {
      if (this.data != null){
          const c = new Colorizer(this.data.temp);
          this.fill = c.color;
      }
      else{
          this.fill = 'white';
      }
  }
}

