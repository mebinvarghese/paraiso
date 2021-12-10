import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'desktop-root',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  title = 'paraiso';
  public destroyed = new Subject<any>();

  constructor() {
  }
  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }
}
