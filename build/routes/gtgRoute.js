"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = __importDefault(require("../environment"));
const router = express_1.default.Router();
router.get('/__gtg', (req, resp) => {
    const jsonResponse = {
        version: '1.0.0',
        environtment: environment_1.default.APP_ENVIRONMENT,
        status: 'up',
    };
    resp.status(200).json(jsonResponse);
});
exports.default = router;
