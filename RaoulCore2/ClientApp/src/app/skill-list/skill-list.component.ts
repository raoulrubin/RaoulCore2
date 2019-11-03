import { Component, OnInit, Renderer2 } from '@angular/core';
import { SkillData } from '../models/skill-data';
import { SkillService } from '../services/skill.service';
import { DomTableSorter } from '../utilities/dom-table-sorter';

// Show a table of technical skills delivered from an HTTP request.
@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  public skills: SkillData[];
  svc: SkillService;
  renderer : Renderer2;

  constructor(svc: SkillService,renderer : Renderer2) {
    this.svc = svc;
    this.renderer = renderer;
  }

  ngOnInit() {
    this.loadSortedData();
  }

  // sort the input by relevance and skill
  loadSortedData() : void {
    this.svc.getJSON().subscribe(data => {
      let list = new Array<SkillData>();
      data.forEach(value => list.push(value));
      this.skills = list.sort(SkillData.comparer);
    }, error => console.error(error));
  }
  
  // combine multiple strings in an array
  combine( ar : string [] ) : string{
    return ar.join(" ");  
  }
  
  // Sort the results by click
  sortTable(col: number) {
    let sorter = new DomTableSorter("skilltable");
    sorter.sort(col);
  }

  // mouse over event
  over( event : UIEvent ) : void{
    this.renderer.addClass(event.target, "infoFocus");
  }

  // mouse out event
  out( event : UIEvent ) : void{
    this.renderer.removeClass(event.target, "infoFocus");
  }
}



