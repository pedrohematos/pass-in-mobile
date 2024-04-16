import { Text, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.separator} />
    </View>
  );
}
