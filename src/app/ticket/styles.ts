import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.green[500],
  },

  scroll: {
    marginTop: -100,
    zIndex: -10,
  },

  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  downArrow: {
    alignSelf: "center",
    marginVertical: 12,
  },

  shareTitle: {
    color: theme.color.white,
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.medium,
  },

  shareText: {
    color: theme.color.white,
    marginTop: 5,
    marginBottom: 23,
  },

  removeTicketTouchable: {
    marginTop: 23,
  },

  removeTicket: {
    color: theme.color.white,
    fontFamily: theme.fontFamily.bold,
    textAlign: "center",
  },

  qrcodeModal: {
    flex: 1,
    backgroundColor: theme.color.green[500],
    alignItems: "center",
    justifyContent: "center",
  },

  qrcodeModalCloseText: {
    marginTop: 30,
    color: theme.color.orange[500],
    textAlign: "center",
  },
});
