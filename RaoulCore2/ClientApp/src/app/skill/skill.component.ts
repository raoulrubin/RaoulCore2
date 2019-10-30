import { Component, Input, OnInit } from '@angular/core';
import { SkillData } from '../skill-data'
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { RatingData } from './rating-data';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() data: SkillData;
  isExpanded: boolean;

  value = 3;
  readonly = true;
  size = 'x-small';
  color = '#FFB75D';

  name: string;
  imagePath: string;
  rating: number;
  lines: string[];
  starInfo: string;

  constructor(config: NgbPopoverConfig, private renderer: Renderer2) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.name = this.data.name;
    this.imagePath = this.data.src;
    const r = new RatingData(this.data.rating);
    this.rating = r.stars;
    this.starInfo = r.comment;
    this.lines = this.combineLines(this.data.content);
  }


  combineLines(content: string[]): string[] {
    const brTag = "<p>";
    var work = content.join("");
    var outContent = work.split(brTag);
    return outContent;
  }

  over( event : UIEvent ) : void{
    this.renderer.addClass(event.target, "infoFocus");
  }

  out( event : UIEvent ) : void{
    this.renderer.removeClass(event.target, "infoFocus");
  }

}