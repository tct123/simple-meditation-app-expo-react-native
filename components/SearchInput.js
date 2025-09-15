"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var SearchInput = function () {
    var _a = (0, react_1.useState)(""), query = _a[0], setQuery = _a[1];
    return (<react_native_1.View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
            <react_native_1.TextInput className="text-base mt-0.5 text-white flex-1" value={query} placeholder="Search a video topic" placeholderTextColor="#CDCDE0" onChangeText={function (e) { return setQuery(e); }}/>
        </react_native_1.View>);
};
exports.default = SearchInput;
