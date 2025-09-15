"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
var TimerContext_1 = require("@/context/TimerContext");
var expo_font_1 = require("expo-font");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
// this will prevent the flash screen from auto hiding until loading all the assets is complete
expo_router_1.SplashScreen.preventAutoHideAsync();
function RootLayout() {
    var _a = (0, expo_font_1.useFonts)({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    }), fontsLoaded = _a[0], error = _a[1];
    (0, react_1.useEffect)(function () {
        if (error)
            throw error;
        if (fontsLoaded)
            expo_router_1.SplashScreen.hideAsync();
    }, [fontsLoaded, error]);
    if (!fontsLoaded) {
        return null;
    }
    if (!fontsLoaded && !error) {
        return null;
    }
    return (<react_native_safe_area_context_1.SafeAreaProvider>
            <TimerContext_1.default>
                <expo_router_1.Stack>
                    <expo_router_1.Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
                    <expo_router_1.Stack.Screen name="meditate/[id]" options={{ headerShown: false }}/>
                    <expo_router_1.Stack.Screen name="index" options={{ headerShown: false }}/>
                    <expo_router_1.Stack.Screen name="(modal)/adjust-meditation-duration" options={{ headerShown: false, presentation: "modal" }}/>
                </expo_router_1.Stack>
            </TimerContext_1.default>
        </react_native_safe_area_context_1.SafeAreaProvider>);
}
