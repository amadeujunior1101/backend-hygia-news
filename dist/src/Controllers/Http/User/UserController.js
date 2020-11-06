"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../../Models/User"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var UserValidator_1 = __importDefault(require("../../../Validators/UserValidator"));
exports.default = {
    index: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.query.email;
                        return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (user)
                            return [2 /*return*/, res.json(user)];
                        return [2 /*return*/, res.json({ message: "User not exists" })];
                }
            });
        });
    },
    store: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fullName, email, password, occupation, user, password_hash, usersAll, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, fullName = _a.fullName, email = _a.email, password = _a.password, occupation = _a.occupation;
                        user = {
                            fullName: fullName,
                            email: email,
                            password: password,
                            occupation: occupation
                        };
                        UserValidator_1.default(user, res);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 2:
                        if (_b.sent())
                            return [2 /*return*/, res
                                    // .status(200)
                                    .json({ error: true, message: "User already exists" })];
                        password_hash = "";
                        if (!password) return [3 /*break*/, 4];
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 3:
                        password_hash = _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, User_1.default.create({
                            fullName: fullName,
                            email: email,
                            password: password_hash,
                            occupation: occupation
                        })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, User_1.default.find()];
                    case 6:
                        usersAll = _b.sent();
                        return [2 /*return*/, res.json({ error: false, message: "successfully registered", users: usersAll })];
                    case 7:
                        error_1 = _b.sent();
                        return [2 /*return*/, res
                                .status(400)
                                .json({ error: error_1, message: "Registration failed" })];
                    case 8: return [2 /*return*/];
                }
            });
        });
    },
    show: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.find()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.json({ users: users, error: false })];
                }
            });
        });
    },
    // async update(req, res) {
    //   const { _id, name } = req.body;
    //   try {
    //     await User.updateOne(
    //       { _id: _id },
    //       {
    //         $set: {
    //           name: name,
    //         },
    //       }
    //     );
    //     return res.status(200).json({ message: "user updated successfully" });
    //   } catch (error) {
    //     return res.status(400).json({ error: "updated failed" });
    //   }
    // },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.query["id"];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, User_1.default.deleteMany({ _id: _id })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, User_1.default.find()];
                    case 3:
                        users = _a.sent();
                        return [2 /*return*/, res
                                .status(200)
                                .json({
                                message: "user deleted successfully",
                                error: false,
                                info: users,
                            })];
                    case 4:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: "deleted failed" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
