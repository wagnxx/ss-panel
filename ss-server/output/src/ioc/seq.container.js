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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_2 = require("inversify");
const myContainer = new inversify_1.Container();
// myContainer.bind('type-userTable').to(UserTable);
let A = class A {
    getdata() {
        return 'aaaaaa';
    }
};
A = __decorate([
    inversify_2.injectable()
], A);
let B = class B {
    constructor(a) {
        this.a = a;
    }
    log() {
        console.log(this.a.getdata());
    }
};
B = __decorate([
    inversify_2.injectable(),
    __param(0, inversify_2.inject('typeA')),
    __metadata("design:paramtypes", [Object])
], B);
let C = class C {
    constructor(b) {
        this.b = b;
    }
    log() {
        console.log('以下内容是从 C 递过来的~');
        this.b.log();
    }
};
C = __decorate([
    inversify_2.injectable(),
    __param(0, inversify_2.inject('typeB')),
    __metadata("design:paramtypes", [Object])
], C);
myContainer.bind('typeA').to(A);
myContainer.bind('typeB').to(B);
myContainer.bind('typeC').to(C);
let b = myContainer.get('typeC');
b.log();
// export { myContainer };
// 这部分在 inversify 中不兼容 ,不能实现  model -> service -> controller [ service.inject(model) controller.inject(service) ]
