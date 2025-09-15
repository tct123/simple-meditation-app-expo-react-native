"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var CustomButton = function (_a) {
    var onPress = _a.onPress, title = _a.title, _b = _a.textStyles, textStyles = _b === void 0 ? "" : _b, _c = _a.containerStyles, containerStyles = _c === void 0 ? "" : _c;
    return (<react_native_1.TouchableOpacity activeOpacity={0.7} className={"bg-white rounded-xl min-h-[62px] justify-center items-center ".concat(containerStyles, " ")} onPress={onPress}>
            <react_native_1.Text className={"text-primary font-semibold text-lg ".concat(textStyles)}>
                {title}
            </react_native_1.Text>
        </react_native_1.TouchableOpacity>);
};
exports.default = CustomButton;
