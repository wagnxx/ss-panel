"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
// import { injectable, inject } from 'inversify';
// import userTable from '../model/user.model';
const mysql_1 = require("../config/mysql");
const MAX_ROW = 30;
const MAX_AGE = 5 * 60 * 1000;
let UserService = class UserService {
    // private usertable;
    // constructor(@inject('type-userTable') usertable) {
    //   this.usertable = usertable;
    //   // 实现不了
    // }
    getData(opt) {
        return __awaiter(this, void 0, void 0, function* () {
            return mysql_1.default.models.UserTable.findOne({
                where: Object.assign({}, opt),
            });
        });
    }
    register({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            let allRows = yield mysql_1.default.models.UserTable.findAll();
            if (allRows.length >= MAX_ROW) {
                return {
                    dangerous: true,
                };
            }
            let exist = yield this.checkUsernameExist(username);
            if (exist.length >= 1) {
                return {
                    exist: true,
                };
            }
            let result = yield mysql_1.default.models.UserTable.create({
                username,
                password,
                rule: 1,
            }, {
                raw: true,
            });
            return result;
        });
    }
    checkUsernameExist(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return mysql_1.default.models.UserTable.findAll({
                where: { username },
            });
        });
    }
    checkSMSExist(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let date = Date.now() + MAX_AGE;
            return mysql_1.default.models.UserTable.findAll({
                where: {
                    code,
                    dead_line: {
                        $gte: date,
                    },
                },
            });
        });
    }
    insertSms({ email, code, date, isLive }) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield mysql_1.default.models.SmsTable.create({
                username: email,
                code,
                isLive,
                dead_line: date + MAX_AGE,
            }, {
                raw: true,
            });
            console.log('sms 插入成功', result);
            return result;
        });
    }
    updateSmsLiveStatus({ email, code, date, isLive }) {
        return __awaiter(this, void 0, void 0, function* () {
            mysql_1.default.models.SmsTable.update({ isLive: 0 }, {
                where: {
                    username: email,
                    code,
                    isLive,
                    dead_line: date + MAX_AGE,
                },
            }).then((res) => {
                console.log('修改isLIve status Sucess～～');
            });
        });
    }
};
UserService = __decorate([
    inversify_binding_decorators_1.provide('user')
], UserService);
exports.default = UserService;
