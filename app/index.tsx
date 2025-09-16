import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const App = () => {
    const beachImage = require("@/assets/meditation-images/beach.webp");
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView style={styles.safeArea}>
                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .mass(0.5)
                                .stiffness(80)
                                .damping(10)}
                        >
                            <Text style={styles.title}>
                                Simple Meditation
                            </Text>
                            <Text style={styles.subtitle}>
                                Simplifying Meditation for Everyone
                            </Text>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .mass(0.5)
                                .stiffness(80)
                                .damping(10)}
                        >
                            <CustomButton
                                onPress={() => router.push("/nature-meditate")}
                                title="Get Started"
                            />
                        </Animated.View>

                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 4,
        justifyContent: "space-between",
    },
    title: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 36,
    },
    subtitle: {
        textAlign: "center",
        color: "white",
        fontWeight: "400",
        fontSize: 24,
        marginTop: 12,
    },
});

export default App;
