"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var expo_router_1 = require("expo-router");
var AffirmationsLayout = function () {
    return (<expo_router_1.Stack>
            <expo_router_1.Stack.Screen name="index" options={{
            headerShown: false,
        }}/>
            <expo_router_1.Stack.Screen name="[itemId]" options={{
            headerShown: false,
        }}/>
        </expo_router_1.Stack>);
};
exports.default = AffirmationsLayout;
