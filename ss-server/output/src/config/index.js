"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path = require("path");
exports.config = {
    STATIC_DIR: path.join(__dirname, '../..', 'dist'),
    VIEWS_DIR: path.join(__dirname, '..', 'views'),
    PORT: 3000,
};
