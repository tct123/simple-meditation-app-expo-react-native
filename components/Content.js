"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var Content = function (_a) {
    var children = _a.children;
    return <react_native_safe_area_context_1.SafeAreaView style={[styles.container]}>{children}</react_native_safe_area_context_1.SafeAreaView>;
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
        paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
    },
});
exports.default = Content;
