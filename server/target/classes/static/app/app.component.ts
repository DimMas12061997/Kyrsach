import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    moduleId:module.id,
    selector:"my-app",
    templateUrl:"app.component.html",
    styleUrls:["app.component.css"]
})
export class AppComponent{

    constructor(private router:Router){

    }

    goMainPage(){
        this.router.navigate(["main"]);
    }
    goPhotoGallery(){
        this.router.navigate(["photos"]);
    }

    goMap(){
        this.router.navigate(["map"]);
    }
    goPrice(){
        this.router.navigate(["price"]);
    }
    goTrainers(){
        this.router.navigate(["trainers"]);
    }
}