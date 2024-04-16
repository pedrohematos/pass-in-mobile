import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.green[500],
    padding: 25,
    gap: 15,
  },

  logo: {
    height: 64,
    resizeMode: "contain",
  },

  input: {
    width: "100%",
    marginTop: 35,
    gap: 15,
  },

  link: {
    color: theme.color.gray[200],
    fontFamily: theme.fontFamily.bold,
    textAlign: "center",
    marginTop: 20,
  },
});
