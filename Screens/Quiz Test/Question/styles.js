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

  submit:{
    flexDirection: "row",
    marginLeft: 30,
    marginBottom: 30,
    alignItems: "center",
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor:"#34A0A4",
    height:50,
    width:120,
    borderRadius:10, 

  },
  submitText:{
    fontWeight:"bold",
    fontSize:16,
    color:"white",
    alignSelf:"center",

  },
  circle: {
    marginLeft: 5,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#AEDBCE",
    alignItems: "center",
    justifyContent: "center",
  },
  option: { fontWeight: "bold", color: "white", },
  answerText: { marginLeft: 10, fontSize: 18, fontWeight: "bold", color:"white" },
});

export default styles;
