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
const sequelize_typescript_1 = require("sequelize-typescript");
// import BaseTable from './BaseTable';
// import WebsitesTable from './WebsitesTable';
// import UserTable from './UserTable';
let CollTable = class CollTable extends sequelize_typescript_1.Model {
    //   // 传入targetKey指定目标模型的外联key
    //   @BelongsTo(() => WebsitesTable, {
    //     as: 'w',
    //     foreignKey: 'wid',
    //     targetKey: 'id'
    //   })
    //   websitesTable: WebsitesTable;
    static findData(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.findAll({
                where: { uid },
                attributes: [['id', 'wid']],
                include: [
                // {
                //   model: WebsitesTable,
                //   attributes: ['id', 'url', 'name','alexa','country']
                // }
                ],
                raw: true,
                nest: true,
            });
            return results;
            // return results.map((c) => {
            //   return {
            //     cid: c.cid,
            //     ...c.w,
            //   };
            // });
        });
    }
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CollTable.prototype, "uid", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CollTable.prototype, "wid", void 0);
CollTable = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'coll',
    })
], CollTable);
exports.default = CollTable;
