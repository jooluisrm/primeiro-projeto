import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

    const handleClick = () => {
        alert("Funcionou!!!");
    }

    return (
        <View style={styles.container}>
            <Text>Opá, tudo bem?</Text>

            <Pressable style={styles.btn} onPress={handleClick}>
                <Text style={styles.btnText}>Clique aqui</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: "#0000FF",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    }
});
