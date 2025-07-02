import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="tela3" options={{headerShown: false}}/>
            <Stack.Screen name="tela4" />
        </Stack>
    )
}