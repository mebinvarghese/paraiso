import { NgModule } from '@angular/core';
import { CollapsComponent } from './collaps/collaps.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CollapsComponent],
    providers: [],
    exports: [CollapsComponent],
})

export class ComponentModule {
}