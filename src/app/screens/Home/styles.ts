import { theme } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 20,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
