import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width - 80;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light,
    height: 150,
    width: 340,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 50,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#293649",
  },
  tag: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 5,
    color: "#293649",
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 5,
    right: -30,
    top: 20,
    borderRadius: 10,
    zIndex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  roleTag: {
    height: 32,
    width: 128,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  roleDescription: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  CircleShapeView: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: "white",
    marginLeft: 32,
    marginRight: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default styles;
