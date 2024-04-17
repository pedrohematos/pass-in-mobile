import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { theme } from "@/styles/theme";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Register", "Fill in all fields.!");
    }

    router.push("/ticket");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.input}>
        <Input>
          <FontAwesome6
            name="user-circle"
            color={theme.color.green[200]}
            size={20}
          />

          <Input.Field
            placeholderTextColor={theme.color.gray[200]}
            placeholder="Full name"
            onChangeText={setName}
          />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={theme.color.green[200]}
            size={20}
          />

          <Input.Field
            placeholderTextColor={theme.color.gray[200]}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail"
            onChangeText={setEmail}
          />
        </Input>
      </View>

      <Button title="Register" onPress={handleRegister} />

      <Link style={styles.link} href="/home">
        Already have a ticket?
      </Link>
    </View>
  );
}
