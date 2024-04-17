import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { theme } from "@/styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  const [code, setCode] = useState("");

  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert("Ticket", "Enter the ticket code!");
    }
  }

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
            onChangeText={setCode}
          />
        </Input>
      </View>

      <Button title="Access credential" onPress={handleAccessCredential} />

      <Link style={styles.link} href="/register">
        Don't have a ticket?
      </Link>
    </View>
  );
}
