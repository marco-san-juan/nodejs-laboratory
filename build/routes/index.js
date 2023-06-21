"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHandlingRouter = exports.productRouter = exports.employeeRouter = exports.gtgRouter = void 0;
const gtgRoute_1 = __importDefault(require("./gtgRoute"));
exports.gtgRouter = gtgRoute_1.default;
const employeeRoute_1 = __importDefault(require("./employeeRoute"));
exports.employeeRouter = employeeRoute_1.default;
const productRoute_1 = __importDefault(require("./productRoute"));
exports.productRouter = productRoute_1.default;
const queryHandlingRoute_1 = __importDefault(require("./queryHandlingRoute"));
exports.queryHandlingRouter = queryHandlingRoute_1.default;
