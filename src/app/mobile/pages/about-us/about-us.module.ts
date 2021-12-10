import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us.component';
import { ComponentModule } from '../../components/components.module';




@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    NgbModule,
    ComponentModule,
    AboutUsPageRoutingModule
  ]
})
export class AboutUsModule { }
