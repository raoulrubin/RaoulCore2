export class RatingData {
    constructor(rating: string) {
        const parts = rating.split("|");
        this.stars = parseFloat(parts[0]);
        if (parts.length > 1) {
            this.comment = parts[1];
        }
        else {
            this.comment = this.toComment(this.stars);
        }
    }

    toComment( stars : number ) : string{
        if (stars == 5 ){
            return "Highly competent";
        } else if (stars >= 4){
            return "Experienced";
        } else if (stars >= 3) {
            return "Good exposure";
        }else if (stars >= 2) {
            return "Some experience";
        }else if (stars >= 1) {
            return "Some exposure";
        }
        return "Just learning";
    }

    public stars: number;
    public comment: string;
}
