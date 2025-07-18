import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{title: "Home"}}
                />
                <Drawer.Screen 
                    name="about"
                    options={{title: "Sobre mim"}}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}