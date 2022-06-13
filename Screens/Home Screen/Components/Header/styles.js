import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop:30,

  },
  helloText: {
    color: "white",
    fontSize: 14,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  mainText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  searchBar: {
    height: 50,
    width: 340,
    marginBottom:40,
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection:"row"
  },

  inputText:{
    left: 30,
    fontStyle:"italic",
    color:"#A1A4B2",
    fontSize:14
  },
  avatar:{
      width:64,
      height:64,
      borderRadius: 32,
      left: 260
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,

    alignItems:"center"
  },
});

export default styles;
