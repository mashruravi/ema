import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdButtonToggleModule
} from '@angular/material';

const materialModules = [
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdButtonToggleModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule { }
