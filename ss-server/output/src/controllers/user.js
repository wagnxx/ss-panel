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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_config_1 = require("../ioc/ioc.config");
const checkLogin_1 = require("../middleware/checkLogin");
const resModel_1 = require("../model/resModel");
const crypto_1 = require("../utils/crypto");
const project_property_1 = require("../config/project.property");
const email_1 = require("../config/email");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    login(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username, password } = ctx.request.body;
            console.log('body==:', ctx.request.body);
            password = crypto_1.genPssword(password);
            const data = yield this.userService.getData({ username, password });
            if (data === null || data === void 0 ? void 0 : data.username) {
                console.log('session:=======:', ctx.session);
                ctx.session.username = data.username;
                ctx.session.rule = data.rule;
                ctx.body = new resModel_1.SuccessModel('登录成功');
            }
            else {
                ctx.body = new resModel_1.ErrorModel('登录验证失败');
            }
        });
    }
    register(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username, password, code } = ctx.request.body; // body
            // 先校验验证码是否正确
            const codeResult = this.userService.checkSMSExist(code);
            if (codeResult.length == 0) {
                return new resModel_1.ErrorModel('验证码错误');
            }
            password = crypto_1.genPssword(password);
            const result = yield this.userService.register({ username, password });
            if (result === null || result === void 0 ? void 0 : result.dangerous) {
                ctx.body = new resModel_1.ErrorModel('注册超过最大数');
                return;
            }
            if (result === null || result === void 0 ? void 0 : result.exist) {
                ctx.body = new resModel_1.ErrorModel('该用户已存在,请重新注册');
                return;
            }
            if (result) {
                console.log('session:=======:', ctx.session);
                console.log('result:=======:', result);
                ctx.session.username = username;
                ctx.body = new resModel_1.SuccessModel('注册成功');
            }
            else {
                ctx.body = new resModel_1.ErrorModel('注册失败');
            }
        });
    }
    loginTest(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = new resModel_1.SuccessModel({
                session: ctx.session,
            }, '测试成功登录');
        });
    }
    getEmailCode(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // 获取验证码
            let email = ctx.request.body.username;
            let code = this.createSixNum();
            let date = Date.now();
            let isLive = 1;
            let result = yield this.userService.checkUsernameExist(email);
            if (result.length > 0) {
                ctx.body = new resModel_1.ErrorModel('账号已存在');
            }
            else {
                ctx.body = new resModel_1.SuccessModel('账号可行');
                let mail = {
                    from: '<1984820441@qq.com>',
                    subject: '接受凭证',
                    to: email,
                    text: `你的验证码为：${code}，请快速登录`,
                };
                yield this.userService.insertSms({ email, code, date, isLive });
                yield email_1.sendMail(mail);
                setTimeout(() => {
                    this.userService.updateSmsLiveStatus({ email, code, date, isLive });
                }, 5 * 50 * 1000);
            }
        });
    }
    createSixNum() {
        var Num = '';
        for (var i = 0; i < 6; i++) {
            Num += Math.floor(Math.random() * 10);
        }
        return Num;
    }
};
__decorate([
    ioc_config_1.httpPost('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    ioc_config_1.httpPost('/register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    ioc_config_1.httpGet('/login-test', checkLogin_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginTest", null);
__decorate([
    ioc_config_1.httpPost('/getEmailCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof ioc_config_1.Router !== "undefined" && ioc_config_1.Router.IRouterContext) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getEmailCode", null);
UserController = __decorate([
    ioc_config_1.controller(`/${project_property_1.VERSION}/user`),
    (ioc_config_1.fluentProvide(ioc_config_1.TYPE.Controller).whenTargetNamed('UserController').done()),
    __param(0, ioc_config_1.inject('user')),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.default = UserController;
