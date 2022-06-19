import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const Question = (props) => {
  const [accessToken, setAccessToken] = useState("")
  const id = props.id;
  const [answer, setAnswer] = useState("");

  
    const storeAccessToken = async () => {
        try {
          setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
          console.log(error);
        }
      };
      storeAccessToken();
      
  
  const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit";
  
  const submitAnswer = () => {
    axios.post(
        url,
            [
                {
                    "id": id,
                    "correctanswer": answer
                }
            ]
        ,
        { headers: {"Authorization" : `Bearer ${accessToken}`} }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  
  //submitAnswer()


  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text
        style={{
          marginTop: 40,
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 40,
        }}
      >
        {props.question}
      </Text>
      <TouchableOpacity
        style={styles.touchableOp}
        onPress={() => {
          setAnswer(props.answer1);
          submitAnswer();
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>A</Text>
        </View>
        <Text style={styles.answerText}>{props.answer1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOp}
        onPress={() => {
          setAnswer(props.answer2);
          submitAnswer();
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>B</Text>
        </View>
        <Text style={styles.answerText}>{props.answer2}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableOp}
        onPress={() => {
          setAnswer(props.answer3);
          submitAnswer();
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>C</Text>
        </View>
        <Text style={styles.answerText}>{props.answer3}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableOp}
        onPress={() => {
          setAnswer(props.answer4);
          submitAnswer();
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>D</Text>
        </View>
        <Text style={styles.answerText}>{props.answer4}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;
