import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet } from "react-native";
import Content from "./Content";

interface AppGradientProps {
    children: React.ReactNode;
    colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
    return (
        <LinearGradient colors={colors} style={styles.gradient}>
            <Content>{children}</Content>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});

export default AppGradient;
