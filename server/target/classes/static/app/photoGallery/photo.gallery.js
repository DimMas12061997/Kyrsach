"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var first_load_1 = require("./first.load");
var PhotoGallery = (function () {
    function PhotoGallery(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.files = [];
        if (first_load_1.FirstLoad.files.length <= 0 && first_load_1.FirstLoad.fl == true) {
            this.postsService.getData('getPhotos').subscribe(function (answer) {
                first_load_1.FirstLoad.files = answer;
                _this.files = first_load_1.FirstLoad.files;
                first_load_1.FirstLoad.fl = false;
            });
        }
        else {
            this.files = first_load_1.FirstLoad.files;
        }
        startGalerea();
    }
    return PhotoGallery;
}());
PhotoGallery = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "photo-gallery",
        templateUrl: "photo.gallery.html",
        styleUrls: ["photo.gallery.css"]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PhotoGallery);
exports.PhotoGallery = PhotoGallery;
//# sourceMappingURL=photo.gallery.js.map