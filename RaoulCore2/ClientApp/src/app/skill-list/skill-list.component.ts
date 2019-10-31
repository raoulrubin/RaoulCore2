import { Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild("content", {static : false}) content : ElementRef;

  ngOnInit() {
      this.svc.getJSON().subscribe(result => {
      this.skills = result;
    }, error => console.error(error));
    //window.onresize = (e : Event) => this.resizeContent(e);
  }
  
  combine( ar : string [] ) : string{
    return ar.join(" ");  
  }
  constructor(svc: SkillService, @Inject('BASE_URL') baseUrl: string, renderer : Renderer2) {
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



