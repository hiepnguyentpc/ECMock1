import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles'

const UpdateQuestionScreen = ({navigation}) => {
    const [ID, setID] = useState("")
    const [accessToken, setAccessToken] = useState("")

    console.log(ID)
    //62bd3e9cc2fdb700217928a9
    //62be7c51c73ae30021f8ea19

    //629f405ead4b380021959637
    //629f405ead4b380021959637
    const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/edit/" + ID;

    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
        };
        storeAccessToken();

    const getQuestion = ( ) =>{
        axios.get(
            url,
            { headers: {"Authorization" : `Bearer ${accessToken}`} }
          )
          .then((response) => {
            console.log(response.data)
            navigation.navigate('Question Screen',
                {
                  question: response.data.question,
                  answer1: response.data.answer1,
                  answer2: response.data.answer2,
                  answer3: response.data.answer3,
                  answer4: response.data.answer4,
                  id: response.data.id,
                  correctanswer: response.data.correctanswer
                }
                
            )
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
          <Text style={styles.mainText}>Which question do you want to update?</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
            <TextInput style={styles.buttonText} placeholder="Insert Question ID" onChangeText={setID}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.deleteButtonStyle}
            onPress={() =>{getQuestion()}}>
            <Text style={styles.buttonText}>FETCH</Text>
        </TouchableOpacity>
        
      </View>
    </LinearGradient>
  );
};

export default UpdateQuestionScreen;
