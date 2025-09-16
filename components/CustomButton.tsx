import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: object;
    containerStyles?: object;
}

const CustomButton = ({
    onPress,
    title,
    textStyles = {},
    containerStyles = {},
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, containerStyles]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyles]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12, // rounded-xl = 12px
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16, // Optional: für bessere Lesbarkeit
    },
    text: {
        color: '#3b82f6', // text-primary (Beispielwert, ersetze mit deiner Primärfarbe)
        fontWeight: '600', // font-semibold
        fontSize: 18,     // text-lg = 18px
    },
});

export default CustomButton;
