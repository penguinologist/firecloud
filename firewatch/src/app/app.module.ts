/* Copyright (c) 2017 . All Rights Reserved. */

/**
* The application's root module.  
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutableComponents } from './app-routing.module';
import { CoreModule } from "./core/index";
import { AlertMessageModule } from "./shared/alert-message";
import { MyDatePickerModule } from 'mydatepicker';
import { NumberFormatPipe } from "./shared/number.format.pipe";


import { environment } from '../environments/environment';

// for AngularFireDatabase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
// for AngularFireAuth
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


import { AgmCoreModule } from '@agm/core';

// The BrowserModule is required to run as a web application
// The HttpModule is used to make web service calls
//
// The AppRouting Module needs to be listed last because 
// it includes a wildcard route (i.e. a catch all) route definition.
//
// The bootstrap property specifies what component to use as the starting point for the application
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CoreModule,
        AlertMessageModule,
        MyDatePickerModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AgmCoreModule
    ],
    declarations: [AppComponent, appRoutableComponents, NumberFormatPipe],
    bootstrap: [AppComponent]
})
export class AppModule {

}