"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = __importDefault(require("@fortawesome/react-fontawesome"));
var react_1 = __importDefault(require("react"));
var ReactFontawesome = function (props) {
    var name = props.name;
    return (react_1.default.createElement(react_fontawesome_1.default, { href: name }));
};
ReactFontawesome.displayName = 'ReactFontawesome';
exports.default = ReactFontawesome;
