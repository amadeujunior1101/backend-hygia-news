"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserValidator = function (user, res) {
    if (user.fullName.length === 0)
        return res.json({ fullName: "required" });
    if (user.email.length === 0)
        return res.json({ email: "required" });
    if (user.password.length === 0)
        return res.json({ password: "required" });
    if (user.occupation.length === 0)
        return res.json({ occupation: "required" });
};
exports.default = UserValidator;
