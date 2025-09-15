"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_icons_1 = require("@expo/vector-icons");
var expo_router_1 = require("expo-router");
var react_native_1 = require("react-native");
var affirmation_gallary_1 = require("@/constants/affirmation-gallary");
var AppGradient_1 = require("@/components/AppGradient");
var react_1 = require("react");
var AffirmationPractice = function () {
    var itemId = (0, expo_router_1.useLocalSearchParams)().itemId;
    var _a = (0, react_1.useState)(), affirmation = _a[0], setAffirmation = _a[1];
    var _b = (0, react_1.useState)([]), sentences = _b[0], setSentences = _b[1];
    (0, react_1.useEffect)(function () {
        for (var idx = 0; idx < affirmation_gallary_1.default.length; idx++) {
            var affirmationData = affirmation_gallary_1.default[idx].data;
            var affirmationToStart = affirmationData.find(function (a) { return a.id === Number(itemId); });
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                var affirmationsArray = affirmationToStart.text.split(".");
                // Remove the last element if it's an empty string
                if (affirmationsArray[affirmationsArray.length - 1] === "") {
                    affirmationsArray.pop();
                }
                setSentences(affirmationsArray);
                return;
            }
        }
    }, []);
    return (<react_native_1.View className="flex-1">
            <react_native_1.ImageBackground source={affirmation === null || affirmation === void 0 ? void 0 : affirmation.image} resizeMode="cover" className="flex-1">
                <AppGradient_1.default colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <react_native_1.Pressable onPress={function () { return expo_router_1.router.back(); }} className="absolute top-16 left-6 z-10">
                        <vector_icons_1.AntDesign name="left-circle" size={50} color="white"/>
                    </react_native_1.Pressable>

                    <react_native_1.ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
                        <react_native_1.View className="h-full border-white justify-center">
                            <react_native_1.View className="h-4/5 justify-center">
                                {sentences.map(function (sentence, idx) { return (<react_native_1.Text className="text-white text-3xl mb-12 font-bold text-center" key={idx}>
                                        {sentence}.
                                    </react_native_1.Text>); })}
                            </react_native_1.View>
                        </react_native_1.View>
                    </react_native_1.ScrollView>
                </AppGradient_1.default>
            </react_native_1.ImageBackground>
        </react_native_1.View>);
};
exports.default = AffirmationPractice;
