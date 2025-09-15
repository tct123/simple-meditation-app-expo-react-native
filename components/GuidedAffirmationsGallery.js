"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var GuidedAffirmationsGallery = function (_a) {
    var title = _a.title, products = _a.products;
    return (<react_native_1.View className="my-5">
            <react_native_1.View className="mb-2">
                <react_native_1.Text className="text-white font-bold text-xl">{title}</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View className="space-y-2">
                <react_native_1.FlatList data={products} showsHorizontalScrollIndicator={false} keyExtractor={function (item) { return item.id.toString(); }} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return (<expo_router_1.Link href={"/affirmations/".concat(item.id)} asChild>
                            <react_native_1.Pressable>
                                <react_native_1.View className="h-36 w-32 rounded-md mr-4">
                                    <react_native_1.Image source={item.image} resizeMode="cover" className="w-full h-full"/>
                                    <react_native_1.Text>ProductGallery</react_native_1.Text>
                                </react_native_1.View>
                            </react_native_1.Pressable>
                        </expo_router_1.Link>);
        }} horizontal/>
            </react_native_1.View>
        </react_native_1.View>);
};
exports.default = GuidedAffirmationsGallery;
