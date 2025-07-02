import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text>Está tela é a sobre mim</Text>

            <Link push href={"/"} asChild>
                <Pressable style={styles.button}>
                    <Text>Ir para Home</Text>
                </Pressable>
            </Link>
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
        backgroundColor: "#00FF00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})