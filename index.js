"use strict";
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
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_1 = __importDefault(require("react"));
var shim_1 = __importDefault(require("./shim"));
/**
 * Method to get the final names for font-awesome 5
 * @param v5
 * @param fas
 * @param far
 * @param fal
 * @param fab
 * @param name
 * @param {String} name Name of the icon to use
 * @returns {Array} [ type, prefixed name ]
 */
var getFaName = function (_a) {
    var icon = _a.icon, name = _a.name, tag = _a.tag, fas = _a.fas, far = _a.far, fal = _a.fal, fab = _a.fab;
    var finalName = (icon || name);
    if (fas) {
        return ['fas', finalName];
    }
    if (far) {
        return ['far', finalName];
    }
    if (fal) {
        return ['fal', finalName];
    }
    if (fab) {
        return ['fab', finalName];
    }
    // if no set is specified, check if it should be shimmed
    return shim_1.default(finalName);
};
var allFalsy = function (values) {
    return !values.reduce(function (a, b) { return b || a; }, false);
};
exports.isV4 = function (_a) {
    var icon = _a.icon, name = _a.name, tag = _a.tag, v5 = _a.v5, fas = _a.fas, far = _a.far, fal = _a.fal, fab = _a.fab;
    if (v5) {
        return false;
    }
    if (tag) {
        return true;
    }
    if (!allFalsy([fas, far, fal, fab])) {
        return false;
    }
    if (typeof icon !== 'string' && typeof name !== 'string') {
        return false;
    }
    if (icon && typeof icon !== 'string') {
        return false;
    }
    return true;
};
var ReactFontawesome = function (props) {
    var icon = props.icon, 
    // rotate is renamed rotation
    rotate = props.rotate, 
    // below are props that will be omit
    cssModule = props.cssModule, name = props.name, stack = props.stack, tag = props.tag, 
    // semantic props
    v5 = props.v5, fas = props.fas, far = props.far, fal = props.fal, fab = props.fab, 
    // other props will be directly passed
    otherProps = __rest(props, ["icon", "rotate", "cssModule", "name", "stack", "tag", "v5", "fas", "far", "fal", "fab"]);
    var finalIcon = exports.isV4(props)
        ? getFaName(props)
        : icon;
    return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, __assign({ icon: finalIcon, rotation: rotate }, otherProps));
};
ReactFontawesome.displayName = 'ReactFontawesome';
exports.default = ReactFontawesome;
