import { theme } from "@/styles/theme";
import { hexToRgba } from "@/utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: hexToRgba(theme.color.black, 20),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: hexToRgba(theme.color.white, 10),
  },

  title: {
    flex: 1,
    color: theme.color.white,
    fontFamily: theme.fontFamily.medium,
    textAlign: "center",
  },
});
