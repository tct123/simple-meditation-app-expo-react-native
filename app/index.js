"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var expo_status_bar_1 = require("expo-status-bar");
var CustomButton_1 = require("@/components/CustomButton");
var AppGradient_1 = require("@/components/AppGradient");
var expo_router_1 = require("expo-router");
var react_native_reanimated_1 = require("react-native-reanimated");
var beach_webp_1 = require("@/assets/meditation-images/beach.webp");
var App = function () {
    var router = (0, expo_router_1.useRouter)();
    return (<react_native_1.View className="flex-1">
            <react_native_1.ImageBackground source={beach_webp_1.default} resizeMode="cover" className="flex-1">
                <AppGradient_1.default 
    // Background Linear Gradient
    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <react_native_safe_area_context_1.SafeAreaView className="flex flex-1 px-1 justify-between">
                        <react_native_reanimated_1.default.View entering={react_native_reanimated_1.FadeInDown.delay(300)
            .mass(0.5)
            .stiffness(80)
            .springify(20)}>
                            <react_native_1.Text className="text-center text-white font-bold text-4xl">
                                Simple Meditation
                            </react_native_1.Text>
                            <react_native_1.Text className="text-center text-white font-regular text-2xl mt-3">
                                Simplifying Meditation for Everyone
                            </react_native_1.Text>
                        </react_native_reanimated_1.default.View>

                        <react_native_reanimated_1.default.View entering={react_native_reanimated_1.FadeInDown.delay(300)
            .mass(0.5)
            .stiffness(80)
            .springify(20)}>
                            <CustomButton_1.default onPress={function () { return router.push("/nature-meditate"); }} title="Get Started"/>
                        </react_native_reanimated_1.default.View>

                        <expo_status_bar_1.StatusBar style="light"/>
                    </react_native_safe_area_context_1.SafeAreaView>
                </AppGradient_1.default>
            </react_native_1.ImageBackground>
        </react_native_1.View>);
};
exports.default = App;
