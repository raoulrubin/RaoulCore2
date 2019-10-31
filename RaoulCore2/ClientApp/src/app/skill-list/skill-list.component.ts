import { Component, OnInit, Renderer2 } from '@angular/core';
import { SkillData } from '../skill-data';
import { SkillService } from '../skill.service';
import { DomTableSorter } from '../dom-table-sorter';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  public skills: SkillData[];
  svc: SkillService;
  renderer : Renderer2;

  ngOnInit() {
    this.loadSortedData();
  }

  loadSortedData() : void {
    this.svc.getJSON().subscribe(data => {
      let list = new Array<SkillData>();
      data.forEach(value => list.push(value));
      this.skills = list.sort(SkillData.comparer);
    }, error => console.error(error));
  }
  
  combine( ar : string [] ) : string{
    return ar.join(" ");  
  }
  constructor(svc: SkillService,renderer : Renderer2) {
    this.svc = svc;
    this.renderer = renderer;
  }
  
  sortTable(col: number) {
    let sorter = new DomTableSorter("skilltable");
    sorter.sort(col);
  }

  over( event : UIEvent ) : void{
    this.renderer.addClass(event.target, "infoFocus");
  }

  out( event : UIEvent ) : void{
    this.renderer.removeClass(event.target, "infoFocus");
  }
}



