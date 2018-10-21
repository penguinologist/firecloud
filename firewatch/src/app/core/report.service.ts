/* Copyright (c) 2017 . All Rights Reserved. */
import { Injectable } from '@angular/core';
declare var pdfMake: any;


@Injectable()
export class ReportService {
    pdf: any;

    getCurrentDate(){
        return new Date().toLocaleDateString("en-IE", {month: "numeric", day: "numeric", year: "numeric" });
    }


}