import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raoul-nav',
  templateUrl: './raoul-nav.component.html',
  styleUrls: ['./raoul-nav.component.css']
})
export class RaoulNavComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }



  ngOnInit() {
  }

}
