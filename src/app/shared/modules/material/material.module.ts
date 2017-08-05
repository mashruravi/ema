import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

const materialModules = [
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule { }
