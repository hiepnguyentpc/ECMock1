import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      createAccountText:{
        fontSize: 28,
        color:"white",
        marginBottom: 50,
      }, 
      getStartedButton:{
        width: 353,
        height: 51,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "white",
        padding: 10,
      },
      getStartedButtonText:{
        alignSelf: "center",
        color: "black",
        fontSize: 14,
        top: 7,
      }, 
      emailTextInput:{
        width: 353,
        height: 51,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 30, 
      }, 
      inputText:{
          top: 6,
          left: 10,
          fontStyle:"italic",
          color:"#A1A4B2",
      },
      signUpText:{
        alignSelf: "center",
        color: "white",
        fontSize: 14,
      }, 
      signUpButtonView:{
          marginTop: 100,
      },
      forgotPasswordText:{
          color:"white",
          fontSize: 14,
          marginTop: 20,
      },
      getBackButton:{
          marginTop:50,
          marginLeft: 8,
      }
});
export default styles
