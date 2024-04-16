import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { theme } from "@/styles/theme";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { styles } from "./styles";

export default function RegisterScreen() {
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
            keyboardType="email-address"
            placeholder="E-mail"
          />
        </Input>
      </View>

      <Button title="Register" />

      <Link style={styles.link} href="/home">
        Already have a ticket?
      </Link>
    </View>
  );
}
