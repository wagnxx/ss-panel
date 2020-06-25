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
var inversify_1 = require("inversify");
var inversify_2 = require("inversify");
var myContainer = new inversify_1.Container();
// myContainer.bind('type-userTable').to(UserTable);
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getdata = function () {
        return 'aaaaaa';
    };
    A = __decorate([
        inversify_2.injectable()
    ], A);
    return A;
}());
var B = /** @class */ (function () {
    function B(a) {
        this.a = a;
    }
    B.prototype.log = function () {
        console.log(this.a.getdata());
    };
    B = __decorate([
        inversify_2.injectable(),
        __param(0, inversify_2.inject('typeA')),
        __metadata("design:paramtypes", [Object])
    ], B);
    return B;
}());
var C = /** @class */ (function () {
    function C(b) {
        this.b = b;
    }
    C.prototype.log = function () {
        console.log('以下内容是从 C 递过来的~');
        this.b.log();
    };
    C = __decorate([
        inversify_2.injectable(),
        __param(0, inversify_2.inject('typeB')),
        __metadata("design:paramtypes", [Object])
    ], C);
    return C;
}());
myContainer.bind('typeA').to(A);
myContainer.bind('typeB').to(B);
myContainer.bind('typeC').to(C);
var b = myContainer.get('typeC');
b.log();
// export { myContainer };
// 这部分在 inversify 中不兼容 ,不能实现  model -> service -> controller [ service.inject(model) controller.inject(service) ]
