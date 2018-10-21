/* Copyright (c) 2017 . All Rights Reserved. */

/**
* Declares all of the components that are used inside the agilejury feature module
* and provides any services for the agilejury feature module.
*
* Angular modules are often used to group a set of code for a set of views for a feature area from 
* a user's point of view. For example, in the Tour of Heros tutorial on the Angular website, 
* "Heros" is a "feature" (sometimes also called a "feature set" or perhaps a "subject area"). 
* Therefore, a Feature Module Typescript File is used to declare all of the components that are 
* used inside a feature module and provides any services defined as part of the feature module. 
* The term Feature Module is used and described in more detail 
* in the Angular 2: First Look training course on Pluralsight.com. 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AgGridModule } from "ag-grid-angular/main";
import { MyDatePickerModule } from 'mydatepicker';
import { FileUploadModule } from 'ng2-file-upload';
import { FirewatchRoutingModule, firewatchRoutedComponents }  from './firewatch-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        TextMaskModule,
        AgGridModule.withComponents([]),
        FileUploadModule,
        FirewatchRoutingModule,
        AgmCoreModule.forRoot( {
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyCdWM-ZNWqk_3as61MN9Z6kB4D4whUo_z4'
        })
    ],
    // declare the routed components that are defined in the routing module for this feature
    declarations: [ firewatchRoutedComponents ]
})
export class FirewatchModule {
    
}