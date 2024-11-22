import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  control: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
  },
  group: {
    height: 56,
    width: "100%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRightWidth: 3,
    borderRightColor: "#F4F5F6",
  },
});
