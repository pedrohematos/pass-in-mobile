import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import HomeScreen from "./screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoMono-Bold": require("../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-SemiBold": require("../assets/fonts/RobotoMono-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Unable to load fonts</Text>
      </View>
    );
  }

  return <HomeScreen />;
}
