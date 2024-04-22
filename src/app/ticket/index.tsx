import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { QRCode } from "@/components/qrcode";
import { useBadgeStore } from "@/store/bagde-store";
import { theme } from "@/styles/theme";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Redirect } from "expo-router";
import { MotiView } from "moti";
import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function TicketScreen() {
  const [expandQRCode, setExpandQRCode] = useState(false);

  const badgeStorage = useBadgeStore();

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        badgeStorage.updateAvatar(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Picture", "It was not possible to select a picture.");
    }
  }

  async function handleShare() {
    try {
      if (badgeStorage.data?.checkInURL) {
        await Share.share({
          message: badgeStorage.data.checkInURL,
        });
      }
    } catch (error) {
      Alert.alert("Share", "Unable to share!");
    }
  }

  function onExpandQRCode() {
    setExpandQRCode(true);
  }

  function onCloseExpandQRCode() {
    setExpandQRCode(false);
  }

  if (!badgeStorage.data?.checkInURL) {
    return <Redirect href="/home/" />;
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
          data={badgeStorage.data}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={onExpandQRCode}
        />

        <MotiView
          from={{
            translateY: 0,
          }}
          animate={{
            translateY: 10,
          }}
          transition={{
            loop: true,
            type: "timing",
            duration: 700,
          }}
        >
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={theme.color.gray[300]}
            style={styles.downArrow}
          />
        </MotiView>

        <Text style={styles.shareTitle}>Share credential</Text>

        <Text style={styles.shareText}>
          Show the world that you will participate in the{" "}
          {badgeStorage.data.eventTitle}!
        </Text>

        <Button title="Share" onPress={handleShare} />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.removeTicketTouchable}
          onPress={badgeStorage.remove}
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
