import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 40,
  },
  titleText: {
    textAlign: "left",
    marginTop: 40,
    marginLeft: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPoints: { marginLeft: 36, marginTop: 20 },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  circleSmall:{
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor:"black",
  },
  titleText2:{
    textAlign: "left",
    marginLeft: 30,
    marginTop:40,
    fontSize: 16,
    fontWeight: "bold",
  },
  titleText3:{
    textAlign: "left",
    marginLeft: 15,
    fontSize: 14,
    color:"#333333"
  }
});

export default styles;
