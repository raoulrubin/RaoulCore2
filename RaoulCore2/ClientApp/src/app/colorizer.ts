import { WeatherData } from './weather-data';

export class Colorizer {
    color: string = "gray";
    constructor(data: WeatherData) {
        if (data == null) {
            this.color = "gray";
            return;
        }
        const range: string[] = ["purple", "blue", "lightblue", "lightgreen", "green", "yellow", "orange", "red"];
        const pct = this.percentile(range.length, data.tempCurrent);
        this.color = range[pct];
    }

    percentile(count: number, temp: number) {
        if (temp <= 0) return 0;
        if (temp >= 100) return count - 1;
        const idx = (temp / 100) * count;
        return Math.round(idx);
    }

}
