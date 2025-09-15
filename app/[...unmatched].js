"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Page = function () {
    return (<react_native_1.View style={styles.container}>
            <expo_router_1.Link href="/(tabs)/nature-meditate">Ready to meditate</expo_router_1.Link>
        </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {},
});
exports.default = Page;
