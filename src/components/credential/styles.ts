import { theme } from "@/styles/theme";
import { hexToRgba } from "@/utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
  },

  band: {
    width: 70,
    height: 152,
    zIndex: 25,
  },

  card: {
    backgroundColor: hexToRgba(theme.color.black, 20),
    alignSelf: "stretch",
    alignItems: "center",
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: hexToRgba(theme.color.white, 10),
    borderRadius: theme.borderRadius.medium,
    marginHorizontal: 10,
    marginTop: -13,
  },

  cardHeader: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    height: 135,
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderColor: hexToRgba(theme.color.white, 10),
    overflow: "hidden",
  },

  textContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: theme.color.zinc[50],
    fontFamily: theme.fontFamily.bold,
  },

  code: {
    color: theme.color.zinc[50],
    fontFamily: theme.fontFamily.bold,
  },

  shadow: {
    width: 150,
    height: 150,
    backgroundColor: theme.color.black,
    borderRadius: 100,
  },

  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -97,
  },

  cameraIcon: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -97,
    backgroundColor: theme.color.gray[400],
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: theme.fontSize.medium,
    fontFamily: theme.fontFamily.bold,
    color: theme.color.zinc[50],
    marginTop: 20,
  },

  email: {
    fontFamily: theme.fontFamily.bold,
    color: theme.color.zinc[300],
    marginBottom: 12,
  },

  qrCode: {
    width: 128,
    height: 128,
  },

  qrCodeTextTouchable: {
    marginTop: 12,
  },

  qrCodeText: {
    fontSize: theme.fontSize.small,
    color: theme.color.orange[500],
  },
});
