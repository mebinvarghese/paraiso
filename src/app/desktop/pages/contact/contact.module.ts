import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageRoutingModule } from './contact-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    ContactPageRoutingModule
  ]
})
export class ContactModule { }
