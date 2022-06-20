import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SimpleSelectButton from 'react-native-simple-select-button';

import { useState } from "react";

const Question = (props) => {
  const [accessToken, setAccessToken] = useState("")
  let id = props.id;
  const [answer, setAnswer] = useState("");
  const [btncolor, setBtncolor] = useState("")
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)

  const setScore = props.setScore
  
  
    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
        };
        storeAccessToken();
   
  const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit";
  
  const submitAnswer =  () => {
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
        alert(response.data[0].result);
        if ((response.data[0].result) && (String(response.data[0].result) == 'true') ){
            setScore((currScore) => currScore +1)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        style={[styles.touchableOp, {backgroundColor: selected1 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setAnswer(props.answer1);

          setSelected2(false)
          setSelected3(false)
          setSelected4(false)
          selected1 == false ? setSelected1(true) : setSelected1(false)
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>A</Text>
        </View>
        <Text style={styles.answerText}>{props.answer1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected2 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setAnswer(props.answer2);
          setSelected1(false)
          setSelected3(false)
          setSelected4(false)
          selected2 == false ? setSelected2(true) : setSelected2(false)

        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>B</Text>
        </View>
        <Text style={styles.answerText}>{props.answer2}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected3 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setAnswer(props.answer3);
          setSelected1(false)
          setSelected2(false)
          setSelected4(false)
          selected3 == false ? setSelected3(true) : setSelected3(false)

        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>C</Text>
        </View>
        <Text style={styles.answerText}>{props.answer3}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected4 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setAnswer(props.answer4);
          setSelected1(false)
          setSelected2(false)
          setSelected3(false)
          selected4 == false ? setSelected4(true) : setSelected4(false)

        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>D</Text>
        </View>
        <Text style={styles.answerText}>{props.answer4}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={()=>{
            submitAnswer()
        }}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

        <TouchableOpacity
            style={styles.submit}
            onPress = {props.onPress}
        >
            <Text style={styles.submitText}>End Quiz</Text>

        </TouchableOpacity>

    </View>
  );
};

export default Question;
