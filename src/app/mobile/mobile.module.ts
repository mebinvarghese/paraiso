import { NgModule } from '@angular/core';

import { MobileComponent } from './mobile.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DesktopRoutingModule } from './mobile-routing.module';

@NgModule({
  declarations: [
    MobileComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    DesktopRoutingModule,
  ],
  providers: [],
  bootstrap: [MobileComponent]
})
export class MobileModule { }
