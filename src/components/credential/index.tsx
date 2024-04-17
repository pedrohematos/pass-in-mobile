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
  imageUrl?: string;
  onChangeAvatar: () => void;
}

export function Credential({ imageUrl, onChangeAvatar }: CredentialProps) {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/ticket/band.png")} style={styles.band} />

      <View style={styles.card}>
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          style={styles.cardHeader}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Unit Summit</Text>
            <Text style={styles.code}>#123</Text>
          </View>

          <View style={styles.shadow} />
        </ImageBackground>

        {imageUrl ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image source={{ uri: imageUrl }} style={styles.profilePicture} />
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

        <Text style={styles.name}>Pedro Matos</Text>

        <Text style={styles.email}>pedrohematos@outlook.com</Text>

        <Image
          source={require("@/assets/ticket/qrcode.png")}
          style={styles.qrCode}
        />

        <TouchableOpacity
          style={styles.qrCodeTextTouchable}
          activeOpacity={0.7}
        >
          <Text style={styles.qrCodeText}>Zoom in on QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
