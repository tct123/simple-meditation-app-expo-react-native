"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuidedAffirmationsGallery_1 = require("@/components/GuidedAffirmationsGallery");
var affirmation_gallary_1 = require("@/constants/affirmation-gallary");
var affirmation_images_1 = require("@/constants/affirmation-images");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var Page = function () {
    var insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    return (<react_native_1.View className="flex-1">
            <expo_linear_gradient_1.LinearGradient 
    // Background Linear Gradient
    colors={["#2e1f58", "#54426b", "#a790af"]} className="px-5" style={{ paddingTop: insets.top }}>
                <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
                    <react_native_1.Text className="text-zinc-50 text-3xl font-bold">
                        Change your beliefs with affirmations
                    </react_native_1.Text>
                    <react_native_1.View>
                        {affirmation_gallary_1.default.map(function (g) { return (<GuidedAffirmationsGallery_1.default key={g.title} title={g.title} products={g.data}/>); })}
                    </react_native_1.View>
                </react_native_1.ScrollView>
            </expo_linear_gradient_1.LinearGradient>
            <expo_status_bar_1.StatusBar style="light"/>
        </react_native_1.View>);
};
var galleryData = [
    {
        title: "Positivity",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.californiaBackyardOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.californiaBackyardTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.californiaBackyardThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.californiaBackyardFour,
            },
        ],
    },
    {
        title: "Reduce Anxiety",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.englishCountrysideOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.englishCountrysideTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.englishCountrysideThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.englishCountrysideFour,
            },
        ],
    },
    {
        title: "Success",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.mountainMeditateOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.mountainMeditateTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.mountainMeditateThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.mountainMeditateFour,
            },
        ],
    },
    {
        title: "Self-Belief",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.nightSkyOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.nightSkyTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.nightSkyThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.nightSkyFour,
            },
        ],
    },
    {
        title: "Mental Health",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.oregonOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.oregonTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.oregonThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.oregonFour,
            },
        ],
    },
    {
        title: "Law of Attraction",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.relaxingRiverOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.relaxingRiverTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.relaxingRiverThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.relaxingRiverFour,
            },
        ],
    },
    {
        title: "Limiting Beliefs",
        data: [
            {
                id: 1,
                name: "test",
                image: affirmation_images_1.default.tuscannyOne,
            },
            {
                id: 2,
                name: "test",
                image: affirmation_images_1.default.tuscannyTwo,
            },
            {
                id: 3,
                name: "test",
                image: affirmation_images_1.default.tuscannyThree,
            },
            {
                id: 4,
                name: "test",
                image: affirmation_images_1.default.tuscannyFour,
            },
        ],
    },
];
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});
exports.default = Page;
