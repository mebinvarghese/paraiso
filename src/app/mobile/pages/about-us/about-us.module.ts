import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us.component';




@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    NgbModule,
    AboutUsPageRoutingModule
  ]
})
export class AboutUsModule { }
