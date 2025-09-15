"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerContext = void 0;
var react_1 = require("react");
exports.TimerContext = (0, react_1.createContext)({
    duration: 10,
    setDuration: function () { },
});
var TimerProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(10), duration = _b[0], setDuration = _b[1];
    return (<exports.TimerContext.Provider value={{ duration: duration, setDuration: setDuration }}>
            {children}
        </exports.TimerContext.Provider>);
};
exports.default = TimerProvider;
