/* Copyright (c) 2017 . All Rights Reserved. */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AlertMessageService } from './alert.message.service';

@NgModule({
    providers: [
        AlertMessageService
    ]
})
export class AlertMessageModule {
    constructor(@Optional() @SkipSelf() parentModule: AlertMessageModule) {

    }
}