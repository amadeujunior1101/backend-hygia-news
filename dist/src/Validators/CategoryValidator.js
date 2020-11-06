"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catergoryValidator = function (category, res) {
    if (category.name.length === 0)
        return res.json({ name: "required" });
};
exports.default = catergoryValidator;
