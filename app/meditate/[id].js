"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppGradient_1 = require("@/components/AppGradient");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var expo_av_1 = require("expo-av");
var CustomButton_1 = require("@/components/CustomButton");
var meditation_images_1 = require("@/constants/meditation-images");
var TimerContext_1 = require("@/context/TimerContext");
var MeditationData_1 = require("@/constants/MeditationData");
var Page = function () {
    var id = (0, expo_router_1.useLocalSearchParams)().id;
    var _a = (0, react_1.useContext)(TimerContext_1.TimerContext), secondsRemaining = _a.duration, setDuration = _a.setDuration;
    var _b = (0, react_1.useState)(false), isMeditating = _b[0], setMeditating = _b[1];
    var _c = (0, react_1.useState)(), audioSound = _c[0], setSound = _c[1];
    var _d = (0, react_1.useState)(false), isPlayingAudio = _d[0], setPlayingAudio = _d[1];
    (0, react_1.useEffect)(function () {
        var timerId;
        // Exit early when we reach 0
        if (secondsRemaining === 0) {
            if (isPlayingAudio)
                audioSound === null || audioSound === void 0 ? void 0 : audioSound.pauseAsync();
            setMeditating(false);
            setPlayingAudio(false);
            return;
        }
        if (isMeditating) {
            // Save the interval ID to clear it when the component unmounts
            timerId = setTimeout(function () {
                setDuration(secondsRemaining - 1);
            }, 1000);
        }
        // Clear timeout if the component is unmounted or the time left changes
        return function () {
            clearTimeout(timerId);
        };
    }, [secondsRemaining, isMeditating]);
    (0, react_1.useEffect)(function () {
        return function () {
            setDuration(10);
            audioSound === null || audioSound === void 0 ? void 0 : audioSound.unloadAsync();
        };
    }, [audioSound]);
    var initializeSound = function () { return __awaiter(void 0, void 0, void 0, function () {
        var audioFileName, sound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    audioFileName = MeditationData_1.MEDITATION_DATA[Number(id) - 1].audio;
                    return [4 /*yield*/, expo_av_1.Audio.Sound.createAsync(MeditationData_1.AUDIO_FILES[audioFileName])];
                case 1:
                    sound = (_a.sent()).sound;
                    setSound(sound);
                    return [2 /*return*/, sound];
            }
        });
    }); };
    var togglePlayPause = function () { return __awaiter(void 0, void 0, void 0, function () {
        var sound, _a, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!audioSound) return [3 /*break*/, 1];
                    _a = audioSound;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, initializeSound()];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    sound = _a;
                    return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.getStatusAsync())];
                case 4:
                    status = _b.sent();
                    if (!((status === null || status === void 0 ? void 0 : status.isLoaded) && !isPlayingAudio)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.playAsync())];
                case 5:
                    _b.sent();
                    setPlayingAudio(true);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.pauseAsync())];
                case 7:
                    _b.sent();
                    setPlayingAudio(false);
                    _b.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    function toggleMeditationSessionStatus() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (secondsRemaining === 0)
                            setDuration(10);
                        setMeditating(!isMeditating);
                        return [4 /*yield*/, togglePlayPause()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var handleAdjustDuration = function () {
        if (isMeditating)
            toggleMeditationSessionStatus();
        expo_router_1.router.push("/(modal)/adjust-meditation-duration");
    };
    // Format the timeLeft to ensure two digits are displayed
    var formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
    var formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");
    return (<react_native_1.View className="flex-1">
            <react_native_1.ImageBackground source={meditation_images_1.default[Number(id) - 1]} resizeMode="cover" className="flex-1">
                <AppGradient_1.default colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <react_native_1.Pressable onPress={function () { return expo_router_1.router.back(); }} className="absolute top-16 left-6 z-10">
                        <vector_icons_1.AntDesign name="left-circle" size={50} color="white"/>
                    </react_native_1.Pressable>

                    <react_native_1.View className="flex-1 justify-center">
                        <react_native_1.View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
                            <react_native_1.Text className="text-4xl text-blue-800 font-rmono">
                                {formattedTimeMinutes}.{formattedTimeSeconds}
                            </react_native_1.Text>
                        </react_native_1.View>
                    </react_native_1.View>

                    <react_native_1.View className="mb-5">
                        <CustomButton_1.default title="Adjust duration" onPress={handleAdjustDuration}/>
                        <CustomButton_1.default title={isMeditating ? "Stop" : "Start Meditation"} onPress={toggleMeditationSessionStatus} containerStyles="mt-4"/>
                    </react_native_1.View>
                </AppGradient_1.default>
            </react_native_1.ImageBackground>
        </react_native_1.View>);
};
exports.default = Page;
