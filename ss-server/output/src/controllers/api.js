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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_config_1 = require("../ioc/ioc.config");
const checkLogin_1 = require("../middleware/checkLogin");
const resModel_1 = require("../model/resModel");
const project_property_1 = require("../config/project.property");
let ApiPage = class ApiPage {
    constructor(apiService) {
        this.apiService = apiService;
    }
    test(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.apiService.getList();
            ctx.body = new resModel_1.SuccessModel(result);
        });
    }
    ssList(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.apiService.getSSList();
            ctx.body = new resModel_1.SuccessModel(result);
        });
    }
    chekckLogin(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = new resModel_1.SuccessModel();
        });
    }
};
__decorate([
    ioc_config_1.httpGet('/test', checkLogin_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ApiPage.prototype, "test", null);
__decorate([
    ioc_config_1.httpGet('/ssList', checkLogin_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ApiPage.prototype, "ssList", null);
__decorate([
    ioc_config_1.httpGet('/chekckLogin', checkLogin_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ApiPage.prototype, "chekckLogin", null);
ApiPage = __decorate([
    ioc_config_1.controller(`/${project_property_1.VERSION}/api`, checkLogin_1.default),
    (ioc_config_1.fluentProvide(ioc_config_1.TYPE.Controller).whenTargetNamed('ApiPage').done()),
    __param(0, ioc_config_1.inject('api')),
    __metadata("design:paramtypes", [Object])
], ApiPage);
exports.default = ApiPage;
