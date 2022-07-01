import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DeleteQuestionScreen = ({navigation}) => {
    const [ID, setID] = useState("")
    const [accessToken, setAccessToken] = useState("")

    console.log(ID)
    //62bd3e9cc2fdb700217928a9
    //62be7c51c73ae30021f8ea19
    const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/edit/" + ID;

    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
        };
        storeAccessToken();

    const deleteQuestion = ( ) =>{
        axios.delete(
            url,
            { headers: {"Authorization" : `Bearer ${accessToken}`} }
          )
          .then((response) => {
            console.log(response.data)
            alert("Question Deleted!")
            //alert("Question ID" + "\n" + response.data.id + " successfully created")
            
          })
          .catch((error) => {
            console.log(error);
            alert(error)
          });
    }


  return (

    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>


       
        <View>
          <Text style={styles.mainText}>Which question do you want to delete?</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
            <TextInput style={styles.buttonText} placeholder="Insert Question ID" onChangeText={setID}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.deleteButtonStyle}
            onPress={() =>{deleteQuestion()}}>
            <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>





       
        
        
      </View>
    </LinearGradient>
  );
};

export default DeleteQuestionScreen;
