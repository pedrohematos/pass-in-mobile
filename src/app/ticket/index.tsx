import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { QRCode } from "@/components/qrcode";
import { theme } from "@/styles/theme";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function TicketScreen() {
  const [imageUrl, setImageUrl] = useState("");
  const [expandQRCode, setExpandQRCode] = useState(false);

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        setImageUrl(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Picture", "It was not possible to select a picture.");
    }
  }

  function onExpandQRCode() {
    setExpandQRCode(true);
  }

  function onCloseExpandQRCode() {
    setExpandQRCode(false);
  }

  return (
    <View style={styles.container}>
      <Header title="My Credential" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Credential
          imageUrl={imageUrl}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={onExpandQRCode}
        />

        <FontAwesome
          name="angle-double-down"
          size={24}
          color={theme.color.gray[300]}
          style={styles.downArrow}
        />

        <Text style={styles.shareTitle}>Share credential</Text>

        <Text style={styles.shareText}>
          Show the world that you will participate in the United Summit!
        </Text>

        <Button title="Share" />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.removeTicketTouchable}
        >
          <Text style={styles.removeTicket}>Remove Ticket</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandQRCode} statusBarTranslucent>
        <View style={styles.qrcodeModal}>
          <TouchableOpacity activeOpacity={0.7} onPress={onCloseExpandQRCode}>
            <QRCode value={"teste"} size={300} />
            <Text style={styles.qrcodeModalCloseText}>Close QRCode</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
