/* Copyright (c) 2017 . All Rights Reserved. */
/** Defines the root component for the application. */
import { Component, OnInit } from '@angular/core';
import { AlertMessageService, AlertMessage } from "./shared/alert-message";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

interface Firefighters{
    location : {
        longtitude: number;
        latitude: number;
    },
    time : number,
    id? : any,
    heartbeat : number,
}

@Component({
    selector: 'test-app',
    templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
    alertMessage: AlertMessage
    
    // firefighterCollection: AngularFirestoreCollection<Firefighters>;
    // firefighters: Observable<Firefighters[]>;
    
    constructor(private alertMessageService: AlertMessageService, router:Router, private afs: AngularFirestore) {
        
        // this.firefighterCollection = this.afs.collection('firefighter');
        // this.firefighters = this.firefighterCollection.valueChanges();
        
        router.events.subscribe((val) => {
            this.closeMessage();
        });
        
    }
    
    ngOnInit(): void {
        this.alertMessageService.alertMessage.subscribe((alertMessage: AlertMessage) => { this.alertMessage = alertMessage; });
    }
    
    closeMessage() {
        this.alertMessageService.close();
    }
}