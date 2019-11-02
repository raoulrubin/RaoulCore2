export class Colorizer {
    color: string = "gray";
    degrees : string  = "--";
    constructor(degrees: number) {
        this.degrees = degrees.toString()
        if (degrees == null) {
            this.color = "gray";
            return;
        }
        const range: string[] = ["purple", "blue", "lightblue", "lightgreen", "green", "yellow", "orange", "red"];
        const pct = this.percentile(range.length, degrees);
        this.color = range[pct];
    }

    percentile(count: number, temp: number) {
        if (temp <= 0) return 0;
        if (temp >= 100) return count - 1;
        const idx = (temp / 100) * count;
        return Math.round(idx);
    }

}
