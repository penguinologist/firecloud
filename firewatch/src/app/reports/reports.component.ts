/* Copyright (c) 2017 . All Rights Reserved. */

import { Component, OnInit } from '@angular/core';
import { ReportService } from '../core/index';

@Component({
    selector: 'reports',
    templateUrl: 'reports.component.html',
})
export class ReportsComponent {

    constructor(private report_service: ReportService) {

    }

}