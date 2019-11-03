import { WeatherData } from '../models/weather-data';

export class Colorizer {
    color: string = "gray";
    constructor(temp : number) {
        if (temp == null) {
            this.color = "gray";
            return;
        }
        this.color = this.getColor( temp );
    }

    getColor( t : number ) : string{
        if (t > 90) return "red";
        else if (t > 80) return "orange"
        else if (t > 60) return "lightgreen"
        else if (t > 32) return "lightblue"
        else if (t > 10) return "blue"
        return "purple";
    }

}
