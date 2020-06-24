import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesPageRoutingModule
  ]
})
export class ServicesModule { }
