"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_gallery_1 = require("./photoGallery/photo.gallery");
var google_map_component_1 = require("./googleMap/google.map.component");
var price_component_1 = require("./PriceComponent/price.component");
var trainers_component_1 = require("./TrainersComponent/trainers.component");
exports.routes = [
    { path: "photos", component: photo_gallery_1.PhotoGallery },
    { path: "map", component: google_map_component_1.GoogleMap },
    { path: "price", component: price_component_1.PriceComponent },
    { path: "trainers", component: trainers_component_1.TrainersComponent },
    { path: "", redirectTo: "photos", pathMatch: "full" }
];
//# sourceMappingURL=app.routes.js.map