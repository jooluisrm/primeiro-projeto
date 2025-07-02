import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#ff0000"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <Stack.Screen name="index" options={{title: "Home"}} />
            <Stack.Screen name="about" options={{title: "Sobre"}} />
            <Stack.Screen name="(aux)/termos" options={{title: "Termos de Uso"}} />
            <Stack.Screen name="auth/login" options={{title: "Login"}} />
            <Stack.Screen name="profile/[id]" />
        </Stack>
    )
}