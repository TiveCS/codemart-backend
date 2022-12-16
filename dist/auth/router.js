"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hellooo',
    });
});
