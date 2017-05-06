/**
 * Created by Влад on 14.03.2017.
 */
import {Routes} from '@angular/router';
import {PhotoGallery} from './photoGallery/photo.gallery';
import {GoogleMap} from "./googleMap/google.map.component";
import {PriceComponent} from "./PriceComponent/price.component";
import {TrainersComponent} from "./TrainersComponent/trainers.component";

export const routes:Routes=[
    {path:"photos",component:PhotoGallery},
    {path:"map",component:GoogleMap},
    {path:"price",component:PriceComponent},
    {path:"trainers",component:TrainersComponent},
    {path:"", redirectTo:"photos",pathMatch:"full"}
]