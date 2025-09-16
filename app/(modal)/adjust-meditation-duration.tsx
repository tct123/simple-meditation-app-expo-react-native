import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext);

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    };

    return (
        <View style={styles.container}>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <Pressable
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <AntDesign name="left-circle" size={50} color="white" />
                </Pressable>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>
                            Adjust your meditation duration
                        </Text>
                    </View>
                    <View>
                        <CustomButton
                            title="10 seconds"
                            onPress={() => handlePress(10)}
                            containerStyles={{ marginBottom: 20 }} // mb-5 = 20px
                        />
                        <CustomButton
                            title="5 minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles={{ marginBottom: 20 }}
                        />
                        <CustomButton
                            title="10 minutes"
                            onPress={() => handlePress(10 * 60)}
                            containerStyles={{ marginBottom: 20 }}
                        />
                        <CustomButton
                            title="15 minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles={{ marginBottom: 20 }}
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative", // relative
    },
    backButton: {
        position: "absolute",
        top: 32,   // top-8 = 32px
        left: 24,  // left-6 = 24px
        zIndex: 10,
    },
    content: {
        justifyContent: "center",
        height: "80%", // h-4/5
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 28,  // text-3xl
        color: "white",
        marginBottom: 32, // mb-8 = 32px
    },
});

export default AdjustMeditationDuration;
