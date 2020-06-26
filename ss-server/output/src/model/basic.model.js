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
let BaseTable = class BaseTable extends sequelize_typescript_1.Model {
    /**
     * 添加
     * @param item 新项目
     */
    static createItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.create(item);
        });
    }
    /**
     * 删除
     * @param id
     */
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.destroy({
                where: { id: id }
            });
        });
    }
    /**
     * 更新
     * @param item 新项目对象
     * @param id 需要修改的项目id
     */
    static updateItemById(item, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let objItem = yield this.getById(id);
            for (let key in item)
                objItem[key] = item[key];
            return yield objItem.save();
        });
    }
    /**
     * 查询所有
     */
    static getList() {
        return __awaiter(this, void 0, void 0, function* () {
            let items = yield this.findAll({ raw: true });
            return items;
        });
    }
    /**
     * 查询（通过id）
     * @param id
     */
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this.findOne({
                raw: true,
                where: { id: id }
            });
            return item;
        });
    }
};
__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], BaseTable.prototype, "id", void 0);
BaseTable = __decorate([
    sequelize_typescript_1.Table
], BaseTable);
exports.default = BaseTable;
