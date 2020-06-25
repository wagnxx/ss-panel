"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var sequelize_typescript_1 = require("sequelize-typescript");
// import { injectable, inject } from "inversify";
// @injectable()
var UserTable = /** @class */ (function (_super) {
    __extends(UserTable, _super);
    function UserTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], UserTable.prototype, "username", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], UserTable.prototype, "password", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], UserTable.prototype, "rule", void 0);
    UserTable = __decorate([
        sequelize_typescript_1.Table({
            tableName: 'user',
        })
    ], UserTable);
    return UserTable;
}(sequelize_typescript_1.Model));
exports.default = UserTable;
