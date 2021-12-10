import { NgModule } from '@angular/core';

import { DesktopComponent } from './desktop.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DesktopRoutingModule } from './desktop-routing.module';

@NgModule({
  declarations: [
    DesktopComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    DesktopRoutingModule,
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class DesktopModule { }
