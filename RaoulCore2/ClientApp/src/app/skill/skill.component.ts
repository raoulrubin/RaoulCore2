import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SkillData } from '../skilldata'
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() data: SkillData;
  @ViewChild("accSkill", { static: false }) myAccordian;
  isExpanded: boolean;

  value = 3;
  readonly = true;
  size = 'x-small';
  color = '#FFB75D';
  private sizes = ['x-small', 'small', '', 'large'];
  private colors = ['#FFB75D', '#F5675B', '#9FDB66'];

  name: string;
  imagePath: string;
  rating: number;
  lines: string[];

  constructor() { }

  ngOnInit() {
    this.name = this.data.name;
    this.imagePath = this.data.src;
    this.rating = this.data.rating;
    this.lines = this.combineLines(this.data.content);
  }

  combineLines(content: string[]): string[] {
    const brTag = "<p>";
    var work = content.join("");
    var outContent = work.split(brTag);
    return outContent;
  }

  allClick() {
    if (this.isExpanded) {
      this.myAccordian.collapseAll();
    } else {
      this.myAccordian.expandAll();
    }
    this.isExpanded = !this.isExpanded;
  }
}


export class SkillRow {

}