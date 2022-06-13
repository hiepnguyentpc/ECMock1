import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  mainImage: {
    width: 367,
    height: 371,
    top: 200,
  },
  signUpButton: {
    width: 353,
    height: 51,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    top: 250,
  },
  signUpButtonText:{
    alignSelf:"center",
    top: 6,
    fontSize: 14,
    
  },
  appNameText:{
    alignSelf: "center",
    color: "white",
    fontSize: 30,
    top: 180,
  },
  infoText:{
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    top: 180,
    fontStyle: "italic",
  }, 
  logInText:{
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    top: 270,
  }
});
export default styles;
