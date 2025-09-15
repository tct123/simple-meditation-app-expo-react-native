"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_1 = require("react");
var Content_1 = require("./Content");
var AppGradient = function (_a) {
    var children = _a.children, colors = _a.colors;
    return (<expo_linear_gradient_1.LinearGradient colors={colors} className="flex-1">
            <Content_1.default>{children}</Content_1.default>
        </expo_linear_gradient_1.LinearGradient>);
};
exports.default = AppGradient;
