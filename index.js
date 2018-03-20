"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_1 = __importDefault(require("react"));
var ReactFontawesome = function (props) {
    var name = props.name;
    return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: name }));
};
ReactFontawesome.displayName = 'ReactFontawesome';
ReactFontawesome.propTypes = __assign({}, react_fontawesome_1.FontAwesomeIcon.propTypes);
exports.default = ReactFontawesome;
