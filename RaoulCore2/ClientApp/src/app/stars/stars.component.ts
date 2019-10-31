import { Component, Input } from '@angular/core';
import { RatingData } from '../rating-data';
@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class SkilRating {
  @Input()
  value: string;
  starCount: number;
  starInfo: string;
  constructor() { }
  ngOnInit() {
    var rd = new RatingData(this.value);
    this.starCount = rd.stars;
    this.starInfo = rd.comment;
  }
}
