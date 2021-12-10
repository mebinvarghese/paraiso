import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ComponentModule } from '../../components/components.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ComponentModule,
    ServicesPageRoutingModule
  ]
})
export class ServicesModule { }
