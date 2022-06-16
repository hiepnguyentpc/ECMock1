import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchableOp: {
    flexDirection: "row",
    marginLeft: 30,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor:"#34A0A4",
    height:70,
    width:360,
    borderRadius:10, 
    
  },
  circle: {
    marginLeft: 5,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#D4D4D4",
    alignItems: "center",
    justifyContent: "center",
  },
  option: { fontWeight: "bold", color: "white", },
  answerText: { marginLeft: 10, fontSize: 18, fontWeight: "bold" },
});

export default styles;
