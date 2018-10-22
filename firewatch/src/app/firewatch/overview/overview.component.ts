/* Copyright (c) 2017 . All Rights Reserved. */

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Subscription } from 'rxjs/Subscription';
import { GridOptions } from "ag-grid";
import { NumberValidators } from '../../shared/number.validator';
import { Mask } from '../../shared/text-format.pipe'
import { CustomValidators } from '../../shared/custom-validator';
import { FormValidation } from '../../shared/form-validation.pipe'
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AlertMessage, AlertMessageService } from '../../shared/alert-message/index';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { AgmCoreModule } from '@agm/core';
import { MouseEvent } from '@agm/core';



// Use the Component directive to define the ActivePoolsEditorComponent as an Angular component
//
// The moduleId property specifies the module id of the module that contains this component
// and is used to resolve relative paths for component specific stylesheets and HTML view templates.
// See also: https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html
//
// The selector property defines the HTML selector that can be used in HTML to link or navigate to this UI component.
//
// The templateUrl specifies a url to a file an HTML file that is rendered by this component.
interface Firefighters {
    location: firebase.firestore.GeoPoint,
    time: firebase.firestore.Timestamp,
    id?: any,
    heartbeat: number,
}

interface Announcements {
    id: string,
    text: string,
    user: string
}

interface Fires {
    id: string,
    location: string,
    threatlevel: number,
    time: firebase.firestore.Timestamp
}

interface People {
    fullname: string,
    phone: number
    missing: string,
    locationdescription: string,
    location: string,
    description: string
}

interface Safezones {
    location: string,
    name: string,
    type: string,
    capacity: number,
    occupants: number,
    timestamp: firebase.firestore.Timestamp
}

@Component({
    
    selector: 'overview',
    templateUrl: './overview.component.html',
    providers: [Mask, CustomValidators,]
    
})
export class OverviewComponent implements OnInit {
    // 40.723789, -73.976522
    lat: number = 40.723789;
    lng: number = -73.976522;
    zoom: number = 9;
    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {
        // this.markers.push({
        //     lat: $event.coords.lat,
        //     lng: $event.coords.lng,
        //     draggable: true
        // });
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
    
    markers: marker[] = [
        //Sample data
        // {
        //     lat: 40.703788,
        //     lng: -73.876521,
        //     label: 'Harry',
        //     draggable: false
        // },
        // {
        //     lat: 40.723790,
        //     lng: -74.776572,
        //     label: 'Sam',
        //     draggable: false
        // },
        // {
        //     lat: 40.783791,
        //     lng: -74.476542,
        //     label: 'Shannon',
        //     draggable: false
        // }
    ]
    
    peoplemarkers:marker[] = [
        // {
        //     lat: 40.783791,
        //     lng: -73.476542,
        //     label: "Johny",
        //     draggable: false
        // }
    ];
    
    firesmarkers:marker[] = [
        // {
        //     lat: 40.783791,
        //     lng: -72.476542,
        //     label: "Johny",
        //     draggable: false
        // }
    ];
    
    safezonemarkers:marker[] = [
        // {
        //     lat: 40.783791,
        //     lng: -72.476542,
        //     label: "Johny",
        //     draggable: false
        // }
    ];
    
    
    
    //Firefighters
    firefighterCollection: AngularFirestoreCollection<Firefighters>;
    firefighters: Observable<Firefighters[]>;
    firefighterArray: Array<Firefighters>;
    
    //Fires
    firesCollection: AngularFirestoreCollection<Fires>;
    fires: Observable<Fires[]>;
    fireArray: Array<Fires>;
    
    //People
    peopleCollection: AngularFirestoreCollection<People>;
    people: Observable<People[]>;
    peopleArray: Array<People>;
    
    //announcements
    announcementCollection: AngularFirestoreCollection<Announcements>;
    announcements: Observable<Announcements[]>;
    announcementArray: Array<Announcements>;
    
    //Safezones
    safezoneCollection: AngularFirestoreCollection<Safezones>;
    safezones: Observable<Safezones[]>;
    safezoneArray: Array<Safezones>;
    
    constructor(private formBuilder: FormBuilder, private mask: Mask, private customValidators: CustomValidators, private alertMessageService: AlertMessageService, private afs: AngularFirestore) {
        //firefighters 
        this.firefighterCollection = this.afs.collection('firefighters');
        this.firefighters = this.firefighterCollection.valueChanges();
        
        this.firefighters.subscribe(result => {
            this.firefighterArray = result;
            console.log("items in firefighter db: " + this.firefighterArray.length);
            this.markers = [];
            this.firefighterArray.forEach(firefighter => {
                this.markers.push({
                    lat: firefighter.location.latitude,
                    lng: firefighter.location.longitude,
                    draggable: false,
                    label: firefighter.id
                });
            });
        });
        
        //fires 
        this.firesCollection = this.afs.collection('fires');
        this.fires = this.firesCollection.valueChanges();
        
        this.fires.subscribe(result => {
            this.fireArray = result;
            console.log("items in fires db: " + this.fireArray.length);
            this.firesmarkers = [];
            this.fireArray.forEach(fire => {
                var commalocation = fire.location.indexOf(",");
                console.log(fire.location.substr(0,commalocation));
                console.log(fire.location.substr(commalocation+1));
                this.firesmarkers.push({
                    lat: parseFloat(fire.location.substr(0,commalocation)),
                    lng: parseFloat(fire.location.substr(commalocation+1)),
                    draggable: false,
                    label: fire.id,
                });
            });
        });
        
        //people 
        this.peopleCollection = this.afs.collection('people');
        this.people = this.peopleCollection.valueChanges();
        
        this.people.subscribe(result => {
            this.peoplemarkers = [];
            this.peopleArray = result;
            console.log("items in people db: " + this.peopleArray.length);
            this.peopleArray.forEach(people => {
                var commalocation = people.location.indexOf(",");
                // console.log(people.location.substr(0,commalocation));
                // console.log(people.location.substr(commalocation+1));
                this.peoplemarkers.push({
                    lat: parseFloat(people.location.substr(0,commalocation)),
                    lng: parseFloat(people.location.substr(commalocation+1)),
                    draggable: false,
                    label: people.fullname
                });
            });
        });
        
        //announcements 
        
        this.announcementCollection = this.afs.collection("announcements", ref => ref.orderBy("id","desc"));
        this.announcements = this.announcementCollection.valueChanges();
        
        this.announcements.subscribe(result => {
            this.announcementArray = result;
            console.log("items in announcements db: " + this.announcementArray.length);
        });
        
        //safezones 
        this.safezoneCollection = this.afs.collection('safezones');
        this.safezones = this.safezoneCollection.valueChanges();
        
        this.safezones.subscribe(result => {
            this.safezoneArray = result;
            console.log("items in safezones db: " + this.safezoneArray.length);
            this.safezonemarkers = [];
            this.safezoneArray.forEach(safezone => {
                var commalocation = safezone.location.indexOf(",");
                // console.log(people.location.substr(0,commalocation));
                // console.log(people.location.substr(commalocation+1));
                this.safezonemarkers.push({
                    lat: parseFloat(safezone.location.substr(0,commalocation)),
                    lng: parseFloat(safezone.location.substr(commalocation+1)),
                    draggable: false,
                    label: safezone.name
                });
            });
        });
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
    
}

interface marker {
    lat: number;
    lng: number;
    label?: String;
    draggable: boolean;
}


