import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingPageRoutingModule } from './tracking-routing.module';
import { ComponentModule } from '../../components/components.module';
import { TrackingComponent } from './tracking.component';



@NgModule({
  declarations: [TrackingComponent],
  imports: [
    CommonModule,
    ComponentModule,
    TrackingPageRoutingModule
  ]
})
export class TrackingModule { }
