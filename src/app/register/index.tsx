import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { api } from "@/server/api";
import { useBadgeStore } from "@/store/bagde-store";
import { theme } from "@/styles/theme";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";

const EVENT_ID = "7c4a1307-b678-4356-bfff-c2eff710d5f3";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleRegister() {
    try {
      if (!name.trim() || !email.trim()) {
        return Alert.alert("Register", "Fill in all fields.!");
      }

      setIsLoading(true);

      const registerResponse = await api.post(`/events/${EVENT_ID}/attendees`, {
        name,
        email,
      });

      const attendeeId = registerResponse.data?.attendeeId;

      if (attendeeId) {
        const badgeResponse = await api.get(`/attendees/${attendeeId}/badge`);

        badgeStore.save(badgeResponse.data.badge);

        Alert.alert("Register", "Registration successfully completed!", [
          { text: "Ok", onPress: () => router.push("/ticket/") },
        ]);
      }
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.message) {
        Alert.alert("Register", error.response.data.message);
      } else {
        Alert.alert("Register", "It was not possible to register");
      }
    } finally {
      setIsLoading(false);
    }
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

      <Button title="Register" onPress={handleRegister} isLoading={isLoading} />

      <Link style={styles.link} href="/home/">
        Already have a ticket?
      </Link>
    </View>
  );
}
