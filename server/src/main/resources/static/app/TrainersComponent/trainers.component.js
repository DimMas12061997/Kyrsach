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
var TrainersComponent = (function () {
    function TrainersComponent() {
        this.imgPath = '';
        this.val = '<p>- тренер по фитнесу;</p><p>- магистр педагогических наук;</p><p>- специалист по оздоровительной физической культуре, спортивной тренировки и адаптивной физической культуре.</p><p>- член BFBB;</p><p>- автор научной работы по влиянию физических упражнений на умственную работоспособность.</p>  <p>- тренер по фитнесу;</p><p>- магистр педагогических наук;</p><p>- специалист по оздоровительной физической культуре, спортивной тренировки и адаптивной физической культуре.</p><p>- член BFBB;</p><p>- автор научной работы по влиянию физических упражнений на умственную работоспособность.</p>';
    }
    TrainersComponent.prototype.change = function (id) {
        var div = document.getElementsByClassName('a')[0];
        if (id == 0) {
            this.imgPath = '';
            div.innerHTML = '';
        }
        if (id == 1) {
            this.imgPath = '../../images/demko.jpg';
            div.innerHTML = '<p>- тренер по фитнесу;</p><p>- магистр педагогических наук;</p><p>- специалист по оздоровительной физической культуре, спортивной тренировки и адаптивной физической культуре.</p><p>- член BFBB;</p><p>- автор научной работы по влиянию физических упражнений на умственную работоспособность.</p>';
        }
        if (id == 2) {
            this.imgPath = '../../images/zeinalov.jpg';
            div.innerHTML = '<p>- инструктор тренажерного зала;</p><p>- персональный тренер;</p><p>- высшее образование в области физической культуры и спорта;</p><p>- окончил магистратуру БГУФК;</p><p>- стаж тренировок более 10 лет;</p><p>- тренерский опыт - более 5 лет.</p>';
        }
        if (id == 3) {
            this.imgPath = '../../images/kovalevski.jpg';
            div.innerHTML = '<p>Ковалевский Артем Александрович, 27 лет . Тренер по бодифитнесу. Высшее педагогическое образование (БГУ, 2012 г.в.). Курсы БНТУ по бодифитнесу. С 2010г. занимается бодифитнесом. Тренирует с 2012г. Занимался легкой атлетикой с 13 лет как самоучка, призер районных соревнований. Профессионально занимался каратэ в 2004-08 гг., имеет награды городских и районных соревнований, а так же спартакиады БГУ.</p>';
        }
        if (id == 4) {
            this.imgPath = '../../images/domarad.jpg';
            div.innerHTML = '<p>Является персональным тренером по бодибилдингу и фитнесу с многолетним стажем, а так же выступающим спортсменом в категории пляжный бодибилдинг. Прошел через все круги ада телостроительства, так как впервые появившись в зале сам весил 142 кг. Смог изменить себя и помогаю меняться Вам.</p><p>Красивое тело - это путь к гармонии, дисциплине и успеху в жизни. Строить себя сложно и долго. Но это стоит того, что бы начать. На пути к своей цели можно встретить множество трудностей, преодолевая которые мы закаляем тело и дух. Облегчить свой путь и избежать подводных камней Вам поможет персональный тренер. </p>';
        }
    };
    return TrainersComponent;
}());
TrainersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "train",
        templateUrl: "trainers.component.html",
        styleUrls: ["trainers.component.css"]
    }),
    __metadata("design:paramtypes", [])
], TrainersComponent);
exports.TrainersComponent = TrainersComponent;
//# sourceMappingURL=trainers.component.js.map