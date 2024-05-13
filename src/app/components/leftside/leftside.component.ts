import { Component } from '@angular/core';

@Component({
  selector: 'app-leftside',
  standalone: true,
  template: `
<p>sidenav</p>
  `,
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent {
  isExpanded = true;

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidenav() {
    this.isExpanded = true;
  }

  collapseSidenav() {
    this.isExpanded = false;
  }
}
