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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_koa_utils_1 = require("inversify-koa-utils");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var inversify_1 = require("inversify");
var Router = require("koa-router");
var checkLogin_1 = require("../middleware/checkLogin");
var resModel_1 = require("../model/resModel");
var ApiPage = /** @class */ (function () {
    function ApiPage(apiService) {
        this.apiService = apiService;
    }
    ApiPage.prototype.test = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getList()];
                    case 1:
                        result = _a.sent();
                        ctx.body = new resModel_1.SuccessModel(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiPage.prototype.ssList = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getSSList()];
                    case 1:
                        result = _a.sent();
                        ctx.body = new resModel_1.SuccessModel(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiPage.prototype.chekckLogin = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.body = new resModel_1.SuccessModel();
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c;
    __decorate([
        inversify_koa_utils_1.httpGet('/test', checkLogin_1.default),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router.IRouterContext) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], ApiPage.prototype, "test", null);
    __decorate([
        inversify_koa_utils_1.httpGet('/ssList', checkLogin_1.default),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof Router !== "undefined" && Router.IRouterContext) === "function" ? _b : Object]),
        __metadata("design:returntype", Promise)
    ], ApiPage.prototype, "ssList", null);
    __decorate([
        inversify_koa_utils_1.httpGet('/chekckLogin', checkLogin_1.default),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof Router !== "undefined" && Router.IRouterContext) === "function" ? _c : Object]),
        __metadata("design:returntype", Promise)
    ], ApiPage.prototype, "chekckLogin", null);
    ApiPage = __decorate([
        inversify_koa_utils_1.controller('/api', checkLogin_1.default),
        (inversify_binding_decorators_1.fluentProvide(inversify_koa_utils_1.TYPE.Controller).whenTargetNamed('ApiPage').done()),
        __param(0, inversify_1.inject('api')),
        __metadata("design:paramtypes", [Object])
    ], ApiPage);
    return ApiPage;
}());
exports.default = ApiPage;
