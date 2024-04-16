import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { theme } from "@/styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.input}>
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={theme.color.green[200]}
            size={20}
          />

          <Input.Field
            placeholderTextColor={theme.color.gray[200]}
            placeholder="Ticket code"
          />
        </Input>
      </View>

      <Button title="Access credential" />

      <Link style={styles.link} href="/register">
        Don't have a ticket?
      </Link>
    </View>
  );
}
