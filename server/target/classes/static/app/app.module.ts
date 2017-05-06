import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser' ;

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import { PhotoGallery } from './photoGallery/photo.gallery';
import {routes} from './app.routes';
import {PostsService} from "./services/posts.service";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";


import { AgmCoreModule } from 'angular2-google-maps/core';
import {GoogleMap} from "./googleMap/google.map.component";

import {ToasterModule} from 'angular2-toaster';
import {PriceComponent} from "./PriceComponent/price.component";
import {TrainersComponent} from "./TrainersComponent/trainers.component";


@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,ToasterModule,AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCpW3itKX63qjTBrU_EaFpBsRu24lb5GLE'
    }),RouterModule.forRoot(routes)],
    declarations:[AppComponent,PhotoGallery,GoogleMap,PriceComponent,TrainersComponent],
    providers:[PostsService],
    bootstrap:[AppComponent]
})
export class AppModule{
}