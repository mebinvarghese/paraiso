import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ComponentModule } from '../../components/components.module';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ComponentModule,
    ServicesPageRoutingModule
  ]
})
export class ServicesModule { }
