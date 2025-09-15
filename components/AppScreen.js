"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var AppScreen = function (_a) {
    var children = _a.children;
    return <react_native_1.View style={[styles.container]}>{children}</react_native_1.View>;
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = AppScreen;
