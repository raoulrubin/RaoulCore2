import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { SkillData } from '../skill-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  sections: SkillData[];
  subscription: Subscription;
  service: SkillService;

  constructor(private svc: SkillService) {
    this.service = svc;
  }

  ngOnInit() {
    this.subscription = this.service.getJSON().subscribe((data: SkillData[]) => {
      this.sections = data;
    });
    console.log("init");
  }

  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    this.subscription.unsubscribe();
  }
}
