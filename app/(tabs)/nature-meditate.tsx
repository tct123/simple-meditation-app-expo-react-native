import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";

const Page = () => {
    return (
        <View style={styles.container}>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>
                        Welcome Steven
                    </Text>
                    <Text style={styles.subtitleText}>
                        Start your meditation practice today
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={MEDITATION_DATA}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => router.push(`/meditate/${item.id}`)}
                                style={styles.pressableItem}
                            >
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id - 1]}
                                    resizeMode="cover"
                                    style={styles.backgroundImage}
                                >
                                    <LinearGradient
                                        colors={[
                                            "transparent",
                                            "rgba(0,0,0,0.8)",
                                        ]}
                                        style={styles.gradient}
                                    >
                                        <Text style={styles.itemTitle}>
                                            {item.title}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
            </AppGradient>
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 24, // mb-6
    },
    welcomeText: {
        color: "#e5e7eb", // text-gray-200
        marginBottom: 12, // mb-3
        fontWeight: "bold",
        fontSize: 36,     // text-4xl
        textAlign: "left",
    },
    subtitleText: {
        color: "#e0e7ff", // text-indigo-100
        fontSize: 20,     // text-xl
        fontWeight: "500", // font-medium
    },
    pressableItem: {
        height: 192,     // h-48
        marginVertical: 12, // my-3
        borderRadius: 6, // rounded-md
        overflow: "hidden",
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 6,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    itemTitle: {
        color: "#f3f4f6", // text-gray-100
        fontSize: 28,     // text-3xl
        fontWeight: "bold",
        textAlign: "center",
    },
    list: {
        paddingBottom: 150,
    },
});

export default Page;
