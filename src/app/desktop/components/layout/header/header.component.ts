import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageName = 'home';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(eve => {
      if (eve instanceof NavigationEnd) {
        console.log(eve);
        this.checkPageName();
      }
    });
    this.checkPageName();
  }
  checkPageName() {
    if (this.router.url.indexOf('about-us') > -1) {
      console.log(this.router.url);
      this.pageName = 'about-us';
    } else if (this.router.url.indexOf('services') > -1) {
      console.log(this.router.url);
      this.pageName = 'services';
    } else if (this.router.url.indexOf('contact') > -1) {
      console.log(this.router.url);
      this.pageName = 'contact';
      console.log(this.pageName);
    } else if (this.router.url.indexOf('tracking') > -1) {
      console.log(this.router.url);
      console.log(this.router.url);
      this.pageName = 'tracking';
    } else {
      this.pageName = 'home';
    }
  }

}
