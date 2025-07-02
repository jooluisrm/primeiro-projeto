import { Link, router, Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: "Perfil" + id
            }}/>
            <Text>Tela do perfil {id}</Text>
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