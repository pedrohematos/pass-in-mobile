import { theme } from "@/styles/theme";
import QRCodeSvg from "react-native-qrcode-svg";

interface QRCodeProps {
  value: string;
  size: number;
}

export function QRCode({ value, size }: QRCodeProps) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={theme.color.white}
      backgroundColor="transparent"
    />
  );
}
