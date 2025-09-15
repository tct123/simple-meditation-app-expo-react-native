"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unstable_settings = void 0;
var vector_icons_1 = require("@expo/vector-icons");
var expo_router_1 = require("expo-router");
var Colors_1 = require("@/constants/Colors");
var react_1 = require("react");
exports.unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "(tabs)",
};
var Page = function () {
    return (<expo_router_1.Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors_1.default.primary,
        }}>
            <expo_router_1.Tabs.Screen name="nature-meditate" options={{
            tabBarLabel: "Meditate",
            tabBarIcon: function (_a) {
                var color = _a.color;
                return (<vector_icons_1.MaterialCommunityIcons name="flower-tulip" size={24} color={color}/>);
            },
        }}/>
            <expo_router_1.Tabs.Screen name="affirmations" options={{
            tabBarLabel: "Affirmations",
            tabBarIcon: function (_a) {
                var color = _a.color;
                return (<vector_icons_1.Entypo name="open-book" size={24} color={color}/>);
            },
        }}/>
        </expo_router_1.Tabs>);
};
exports.default = Page;
