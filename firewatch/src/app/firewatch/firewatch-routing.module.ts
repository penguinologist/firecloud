/* Copyright (c) 2017 . All Rights Reserved. */

/**
* Routing definition for the agilejury feature module
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirewatchComponent } from './firewatch.component';
import { OverviewComponent } from './overview/overview.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EmtComponent } from './emt/emt.component';


// Configure route paths referenced at a constant named 'routes'
// Parent and child routes get put together to create the actual route
const routes: Routes = [
    {
        // The empty path is specified here because, with lazily loaded routes, 
        // the child path url is specified in the app root module
        path: '', 
        component: FirewatchComponent,
        children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'map', component: MapComponent },
            { path: 'timeline', component: TimelineComponent },
            { path: 'emt', component: EmtComponent },
            // { path: 'edittimeinoutdialog', component: EditTimeInOutDialogComponent },
            // { path: 'pendingcheckineditor', component: PendingCheckInEditorComponent },
            // { path: 'personeditor', component: PersonEditorComponent },
            // { path: 'postmaintaineditor', component: PostmaintainEditorComponent },
            // { path: 'reportmaintainance', component: ReportMaintainanceComponent },
        ]
    }
];

// Create and export the AgilejuryRoutingModule class configured with the @NgModulef
// RouterModule.forChild() must be used to import the route definitions in feature modules 
// rather than using forRoot(), which must be used in the root app module. 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirewatchRoutingModule {
    
}

// Create an array of routable components that are exporting 
// which we will need to use in the feature module
export const firewatchRoutedComponents = [
    FirewatchComponent,
    OverviewComponent,
    MapComponent,
    TimelineComponent,
    EmtComponent,
    // ActivePoolsEditorComponent,
    // CheckInOutEditorComponent,
    // CreatePanelEditorComponent,
    // CreatePoolsEditorComponent,
    // EditTimeInOutDialogComponent,
    // PendingCheckInEditorComponent,
    // PersonEditorComponent,
    // PostmaintainEditorComponent,
    // ReportMaintainanceComponent,
];