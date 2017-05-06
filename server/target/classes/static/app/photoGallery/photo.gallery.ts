import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {FirstLoad} from "./first.load";
declare function startGalerea();

@Component({
    moduleId:module.id,
    selector:"photo-gallery",
    templateUrl:"photo.gallery.html",
    styleUrls:["photo.gallery.css"]
})

export class PhotoGallery{
    files:string[]=[];
    constructor(private postsService:PostsService){
        if(FirstLoad.files.length<=0 && FirstLoad.fl==true) {
            this.postsService.getData('getPhotos').subscribe(answer=> {
                FirstLoad.files=answer;
                this.files=FirstLoad.files;
                FirstLoad.fl=false;
            });
        }
        else{
            this.files=FirstLoad.files;
        }
        startGalerea();
    }
}