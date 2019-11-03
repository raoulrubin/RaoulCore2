import { Component, Input } from '@angular/core';
import { RatingData } from '../models/rating-data';

// Display star rating (ng-bootstrap)
@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class SkilRating {
  @Input() value: string;
  starCount: number;
  starInfo: string;
  constructor() { }
  ngOnInit() {
    // parse the pipe delimited string
    var rd = new RatingData(this.value);
    this.starCount = rd.stars;
    this.starInfo = rd.comment;
  }
}
