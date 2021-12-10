import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { ComponentModule } from '../../components/components.module';
import { AboutUsComponent } from './about-us.component';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    ComponentModule,
    AboutUsPageRoutingModule
  ]
})
export class AboutUsModule { }
