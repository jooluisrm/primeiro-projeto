import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen() {

    const handleClick = () => {
        router.navigate("/about");
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: "Início"
            }} />
            <Text>Opa, tudo bem?</Text>

            <Pressable onPress={handleClick} style={styles.button}>
                <Text>Ir para Sobre</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
});