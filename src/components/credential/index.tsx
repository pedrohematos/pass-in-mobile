import { QRCode } from "@/components/qrcode";
import { BadgeStore } from "@/store/bagde-store";
import { theme } from "@/styles/theme";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export interface CredentialProps {
  data: BadgeStore;
  onChangeAvatar: () => void;
  onExpandQRCode: () => void;
}

export function Credential({
  data,
  onChangeAvatar,
  onExpandQRCode,
}: CredentialProps) {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/ticket/band.png")} style={styles.band} />

      <View style={styles.card}>
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          style={styles.cardHeader}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data.eventTitle}</Text>
            <Text style={styles.code}>#{data.id}</Text>
          </View>

          <View style={styles.shadow} />
        </ImageBackground>

        {data.image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image source={{ uri: data.image }} style={styles.profilePicture} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.cameraIcon}
            activeOpacity={0.9}
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={theme.color.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text style={styles.name}>{data.name}</Text>

        <Text style={styles.email}>{data.email}</Text>

        <TouchableOpacity activeOpacity={0.7} onPress={onExpandQRCode}>
          <QRCode value={data.checkInURL} size={120} />

          <Text style={styles.qrCodeText}>Zoom in on QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
