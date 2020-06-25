"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPssword = void 0;
var crypto = require('crypto');
var SECRET_KEY = 'YUGUDS_87831#';
function md5(content) {
    var md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}
function genPssword(password) {
    var str = "password=" + password + "&key=" + SECRET_KEY;
    return md5(str);
}
exports.genPssword = genPssword;
