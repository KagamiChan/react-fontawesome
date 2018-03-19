"use strict";
/**
 * injects react-fontawesome by overriding its render method
 * since React Native is not supported by official component, jsx is transpiled to react
 * @example import '@skagami/react-fontawesome/inject'
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = __importDefault(require("@fortawesome/react-fontawesome"));
var react_1 = __importDefault(require("react"));
var react_fontawesome_2 = __importDefault(require("react-fontawesome"));
var shim_1 = __importDefault(require("./shim"));
react_fontawesome_2.default.prototype.render = function () {
    var _a = this.props, name = _a.name, children = _a.children, props = __rest(_a, ["name", "children"]);
    return react_1.default.createElement(react_fontawesome_1.default, __assign({ icon: shim_1.default(name) }, props));
};
