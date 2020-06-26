"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_config_1 = require("./ioc/ioc.config");
require("./ioc");
require("./config/mysql");
const index_1 = require("./config/index");
const app_setting_1 = require("./middleware/app_setting");
const bodyParser = require("koa-bodyparser");
const container = new ioc_config_1.Container();
container.load(ioc_config_1.buildProviderModule());
const server = new ioc_config_1.InversifyKoaServer(container);
server.setConfig((app) => {
    app.use(bodyParser());
    // 中间件 cors bodypaser,logger,erro ... 均在此
    app_setting_1.default(app);
});
const app = server.build();
app.listen(index_1.config.PORT, () => {
    console.log('server is running over ' + index_1.config.PORT);
});
