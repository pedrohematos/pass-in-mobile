import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.color.green[400],
    borderRadius: theme.borderRadius.small,
  },

  field: {
    flex: 1,
    color: theme.color.white,
    fontFamily: theme.fontFamily.regular,
  },
});
