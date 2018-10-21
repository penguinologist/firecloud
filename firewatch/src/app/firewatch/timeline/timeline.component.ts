/* Copyright (c) 2017 . All Rights Reserved. */

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GridOptions } from "ag-grid";
import { NumberValidators } from '../../shared/number.validator';
import { Mask } from '../../shared/text-format.pipe'
import { CustomValidators } from '../../shared/custom-validator';
import { FormValidation } from '../../shared/form-validation.pipe'
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AlertMessage, AlertMessageService } from '../../shared/alert-message/index'

// Use the Component directive to define the ActivePoolsEditorComponent as an Angular component
//
// The moduleId property specifies the module id of the module that contains this component
// and is used to resolve relative paths for component specific stylesheets and HTML view templates.
// See also: https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html
//
// The selector property defines the HTML selector that can be used in HTML to link or navigate to this UI component.
//
// The templateUrl specifies a url to a file an HTML file that is rendered by this component.

@Component({

    selector: 'timeline',
    templateUrl: './timeline.component.html',
    providers: [Mask, CustomValidators, ]

})
export class TimelineComponent implements OnInit  {

    // The form model used by the view per Angular Reactive Forms
    // See: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#intro
//     activePoolsEditorForm: FormGroup;
//     formValidation: FormValidation;
//     private displayMessage: any;




//     public gridPoolGridOptions: GridOptions;
//     public gridPersonGridOptions: GridOptions;
//     private gridPoolgridApi:any;
//     private gridPoolgridColumnApi:any;

//     gridPoolGridOptionsExportCsv() {
//         var params = {
//     };
//       this.gridPoolgridApi.exportDataAsCsv(params);
//     }

//     gridPoolOnGridReady(params:any) {
//         this.gridPoolgridApi = params.api;
//         params.api.sizeColumnsToFit();
//         this.gridPoolgridColumnApi = params.columnApi;
//     }
//     private gridPersongridApi:any;
//     private gridPersongridColumnApi:any;

//     gridPersonGridOptionsExportCsv() {
//         var params = {
//     };
//       this.gridPersongridApi.exportDataAsCsv(params);
//     }

//     gridPersonOnGridReady(params:any) {
//         this.gridPersongridApi = params.api;
//         params.api.sizeColumnsToFit();
//         this.gridPersongridColumnApi = params.columnApi;
//     }

//     createGridpool(): void {
//       this.gridPoolGridOptions = {};
//       this.gridPoolGridOptions.editType = 'fullRow';
//       this.gridPoolGridOptions.columnDefs = [
//          {
//              headerName: "Pool Type",
//              field: "poolType",
//              width: 100,
//              headerCheckboxSelection: true,
//              headerCheckboxSelectionFilteredOnly: true,
//              checkboxSelection: true
//          },
//          {
//              headerName: "Reporting Date",
//              field: "reportingDate",
//              width: 100         },
//          {
//              headerName: "Court Location",
//              field: "courtLocation",
//              width: 100         },
//          {
//              headerName: "Eligible",
//              field: "eligible",
//              width: 100         },
//          {
//              headerName: "On Call",
//              field: "onCall",
//              width: 100         },
//          {
//              headerName: "Reporting",
//              field: "reporting",
//              width: 100         },
//          {
//              headerName: "Available",
//              field: "available",
//              width: 100         },
//          {
//              headerName: "Total",
//              field: "total",
//              width: 100         },
//          {
//              headerName: "Group",
//              field: "group",
//              width: 100         },
//          {
//              headerName: "",
//              field: "default",
//              width: 100         },
//          {
//              headerName: "Pool",
//              field: "pool",
//              width: 100         }
//       ];
//       // TODO replace the following test data with real processing
//       this.gridPoolGridOptions.rowData = [
//           {poolType: "Value 1",reportingDate: "Value 2",courtLocation: "Value 3",eligible: "Value 4",onCall: "Value 5",reporting: "Value 6",available: "Value 7",total: "Value 8",group: "Value 9",default: "Value 10",pool: "Value 11"},
//           {poolType: "Value 1",reportingDate: "Value 2",courtLocation: "Value 3",eligible: "Value 4",onCall: "Value 5",reporting: "Value 6",available: "Value 7",total: "Value 8",group: "Value 9",default: "Value 10",pool: "Value 11"}
//       ];
//     }
//     createGridperson(): void {
//       this.gridPersonGridOptions = {};
//       this.gridPersonGridOptions.editType = 'fullRow';
//       this.gridPersonGridOptions.columnDefs = [
//          {
//              headerName: "Reporting Date/Time",
//              field: "reportingDatetime",
//              width: 100,
//              headerCheckboxSelection: true,
//              headerCheckboxSelectionFilteredOnly: true,
//              checkboxSelection: true
//          },
//          {
//              headerName: "Reporting",
//              field: "reporting",
//              width: 100         },
//          {
//              headerName: "Pool Status",
//              field: "poolStatus",
//              width: 100         },
//          {
//              headerName: "Person Status",
//              field: "personStatus",
//              width: 100         },
//          {
//              headerName: "Name",
//              field: "name",
//              width: 100         },
//          {
//              headerName: "Sequence",
//              field: "sequence",
//              width: 100         },
//          {
//              headerName: "Group",
//              field: "group",
//              width: 100         },
//          {
//              headerName: "Juror ID",
//              field: "jurorId",
//              width: 100         }
//       ];
//       // TODO replace the following test data with real processing
//       this.gridPersonGridOptions.rowData = [
//           {reportingDatetime: "Value 1",reporting: "Value 2",poolStatus: "Value 3",personStatus: "Value 4",name: "Value 5",sequence: "Value 6",group: "Value 7",jurorId: "Value 8"},
//           {reportingDatetime: "Value 1",reporting: "Value 2",poolStatus: "Value 3",personStatus: "Value 4",name: "Value 5",sequence: "Value 6",group: "Value 7",jurorId: "Value 8"}
//       ];
//     }
    // Use constructor injection to inject an instance of a FormBuilder
    constructor(
    private formBuilder: FormBuilder,
    private mask: Mask,
    private customValidators: CustomValidators,
    private alertMessageService: AlertMessageService,
    ) {
    }

    // Most initial setup should be done in the ngOnInit() life-cycle hook function
    // rather than in the constructor for this class in order to ensure that the
    // resources are fully loaded before performing the initial setup processing.
    ngOnInit(): void {
        // this.createForm();
        // this.displayMessage = {};
        // this.formValidation = new FormValidation(this.activePoolsEditorForm);
        // this.createGridpool();
        // this.createGridperson();
    }

// // Use a FormBuilder to create a FormGroup to define the Form Model for the view
//     // See: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#intro
//     createForm() {
//         // FormBuilder.group is a factory method that creates a FormGroup
//         // FormBuilder.group takes an object whose keys and values are FormControl names and their definitions.
//         this.activePoolsEditorForm = this.formBuilder.group({
//         }, {updateOn: 'submit'});
//     }
}