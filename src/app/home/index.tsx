import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { api } from "@/server/api";
import { useBadgeStore } from "@/store/bagde-store";
import { theme } from "@/styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleAccessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ticket", "Enter the ticket code!");
      }

      setIsLoading(true);

      const { data } = await api.get(`/attendees/${code}/badge`);

      badgeStore.save(data.badge);
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.message) {
        Alert.alert("Credential", error.response.data.message);
      } else {
        Alert.alert("Credential", "Credential not found");
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket/" />;
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

      <Button
        title="Access credential"
        onPress={handleAccessCredential}
        isLoading={isLoading}
      />

      <Link style={styles.link} href="/register/">
        Don't have a ticket?
      </Link>
    </View>
  );
}
