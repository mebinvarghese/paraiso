import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageRoutingModule } from './contact-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    NgbModule,
    AboutUsPageRoutingModule
  ]
})
export class ContactModule { }
