import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[
            styles.container,
            isFocused && styles.containerFocused
        ]}>
            <TextInput
                style={styles.input}
                value={query}
                placeholder="Search a video topic"
                placeholderTextColor="#CDCDE0"
                onChangeText={(text) => setQuery(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: "rgba(25, 25, 25, 0.1)",
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "rgba(50, 50, 50, 0.2)",
    },
    containerFocused: {
        borderColor: "#60A5FA", // secondary (Beispielwert)
    },
    input: {
        fontSize: 16,
        marginTop: 2,
        color: "white",
        flex: 1,
    },
});

export default SearchInput;
