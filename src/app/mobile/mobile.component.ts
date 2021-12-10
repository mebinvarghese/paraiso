import { Component } from '@angular/core';

@Component({
  selector: 'mobile-root',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  title = 'paraiso';
  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }
}