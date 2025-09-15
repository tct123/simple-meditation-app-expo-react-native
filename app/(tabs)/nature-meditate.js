"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_linear_gradient_1 = require("expo-linear-gradient");
var expo_status_bar_1 = require("expo-status-bar");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var react_native_1 = require("react-native");
var meditation_images_1 = require("@/constants/meditation-images");
var MeditationData_1 = require("@/constants/MeditationData");
var AppGradient_1 = require("@/components/AppGradient");
var Page = function () {
    return (<react_native_1.View className="flex-1">
            <AppGradient_1.default 
    // Background Linear Gradient
    colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <react_native_1.View className="mb-6">
                    <react_native_1.Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
                        Welcome Steven
                    </react_native_1.Text>
                    <react_native_1.Text className="text-indigo-100 text-xl font-medium">
                        Start your meditation practice today
                    </react_native_1.Text>
                </react_native_1.View>
                <react_native_1.View>
                    <react_native_1.FlatList data={MeditationData_1.MEDITATION_DATA} contentContainerStyle={styles.list} keyExtractor={function (item) { return item.id.toString(); }} showsVerticalScrollIndicator={false} renderItem={function (_a) {
            var item = _a.item;
            return (<react_native_1.Pressable onPress={function () {
                    return expo_router_1.router.push("/meditate/".concat(item.id));
                }} className="h-48 my-3 rounded-md overflow-hidden">
                                <react_native_1.ImageBackground source={meditation_images_1.default[item.id - 1]} resizeMode="cover" style={styles.backgroundImage}>
                                    <expo_linear_gradient_1.LinearGradient 
            // Gradient from transparent to black
            colors={[
                    "transparent",
                    "rgba(0,0,0,0.8)",
                ]} style={styles.gradient}>
                                        <react_native_1.Text className="text-gray-100 text-3xl font-bold text-center">
                                            {item.title}
                                        </react_native_1.Text>
                                    </expo_linear_gradient_1.LinearGradient>
                                </react_native_1.ImageBackground>
                            </react_native_1.Pressable>);
        }}/>
                </react_native_1.View>
            </AppGradient_1.default>
            <expo_status_bar_1.StatusBar style="light"/>
        </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
    },
});
exports.default = Page;
