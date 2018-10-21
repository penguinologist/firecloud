/* Copyright (c) 2017 . All Rights Reserved. */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ReportService } from './report.service';

@NgModule({
    providers: [
        ReportService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {

    }
}