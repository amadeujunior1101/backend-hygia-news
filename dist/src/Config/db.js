"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var environment_config_1 = __importDefault(require("../../environment.config"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default
    .connect(environment_config_1.default.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    console.log("Mongo Conectado");
})
    .catch(function (error) {
    console.log("Houve um erro ao se conectar com o MongoDb" + error);
});
exports.default = mongoose_1.default;
