import { theme } from "@/styles/theme";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface ButtomProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({
  title,
  isLoading = false,
  ...otherProps
}: ButtomProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isLoading}
      activeOpacity={0.7}
      {...otherProps}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.color.green[500]} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
