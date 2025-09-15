"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppGradient_1 = require("@/components/AppGradient");
var CustomButton_1 = require("@/components/CustomButton");
var TimerContext_1 = require("@/context/TimerContext");
var vector_icons_1 = require("@expo/vector-icons");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var react_native_1 = require("react-native");
var AdjustMeditationDuration = function () {
    var setDuration = (0, react_1.useContext)(TimerContext_1.TimerContext).setDuration;
    var handlePress = function (duration) {
        setDuration(duration);
        expo_router_1.router.back();
    };
    return (<react_native_1.View className="flex-1 relative">
            <AppGradient_1.default 
    // Background Linear Gradient
    colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <react_native_1.Pressable onPress={function () { return expo_router_1.router.back(); }} className="absolute top-8 left-6 z-10">
                    <vector_icons_1.AntDesign name="left-circle" size={50} color="white"/>
                </react_native_1.Pressable>
                <react_native_1.View className="justify-center h-4/5">
                    <react_native_1.View>
                        <react_native_1.Text className="text-center font-bold text-3xl text-white mb-8">
                            Adjust your meditation duration
                        </react_native_1.Text>
                    </react_native_1.View>

                    <react_native_1.View>
                        <CustomButton_1.default title="10 seconds" onPress={function () { return handlePress(10); }} containerStyles="mb-5"/>
                        <CustomButton_1.default title="5 minutes" onPress={function () { return handlePress(5 * 60); }} containerStyles="mb-5"/>
                        <CustomButton_1.default title="10 minutes" onPress={function () { return handlePress(10 * 60); }} containerStyles="mb-5"/>
                        <CustomButton_1.default title="15 minutes" onPress={function () { return handlePress(15 * 60); }} containerStyles="mb-5"/>
                    </react_native_1.View>
                </react_native_1.View>
            </AppGradient_1.default>
        </react_native_1.View>);
};
exports.default = AdjustMeditationDuration;
