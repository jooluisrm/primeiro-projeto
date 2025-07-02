import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen() {

    return (
        <View style={styles.container}>
            <Text>Tela 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});