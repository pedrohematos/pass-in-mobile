import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: theme.color.orange[500],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.small,
  },

  title: {
    color: theme.color.green[500],
    fontFamily: theme.fontFamily.bold,
    textTransform: "uppercase",
  },
});
