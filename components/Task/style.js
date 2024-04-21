import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: color.second,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.white,
  },
  content: {
    width: "80%",
    textAlign: "left",
    color: color.primary,
  },
});

export default styles;
