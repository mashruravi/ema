import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule
} from '@angular/material';

const materialModules = [
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule { }
