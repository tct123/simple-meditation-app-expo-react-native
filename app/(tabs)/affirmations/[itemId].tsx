import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ImageBackground, Pressable, ScrollView, StyleSheet } from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import AppGradient from "@/components/AppGradient";
import React, { useEffect, useState } from "react";

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemId)
            );
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                let affirmationsArray = affirmationToStart.text.split(".");
                // Remove the last element if it's an empty string
                if (affirmationsArray[affirmationsArray.length - 1] === "") {
                    affirmationsArray.pop();
                }
                setSentences(affirmationsArray);
                return;
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={affirmation?.image}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        style={styles.backButton}
                    >
                        <AntDesign name="left-circle" size={50} color="white" />
                    </Pressable>
                    <ScrollView
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.contentContainer}>
                            <View style={styles.sentencesContainer}>
                                {sentences.map((sentence, idx) => (
                                    <Text style={styles.sentence} key={idx}>
                                        {sentence}.
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
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
    backButton: {
        position: "absolute",
        top: 64,   // top-16 = 64px
        left: 24,  // left-6 = 24px
        zIndex: 10,
    },
    scrollView: {
        marginTop: 80, // mt-20 = 80px
    },
    contentContainer: {
        height: "100%", // h-full
        borderColor: "white",
        justifyContent: "center",
    },
    sentencesContainer: {
        height: "80%", // h-4/5
        justifyContent: "center",
    },
    sentence: {
        color: "white",
        fontSize: 28,  // text-3xl
        marginBottom: 48, // mb-12 = 48px
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default AffirmationPractice;
