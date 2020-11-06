"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostValidator = function (post, res) {
    if (post.title.length === 0)
        return res.json({ title: "required" });
    if (post.content.length === 0)
        return res.json({ content: "required" });
    if (post.visibility.length === 0)
        return res.json({ visibility: "required" });
    if (post.category.length === 0)
        return res.json({ category: "required" });
    if (post.author.length === 0)
        return res.json({ author: "required" });
};
exports.default = PostValidator;
