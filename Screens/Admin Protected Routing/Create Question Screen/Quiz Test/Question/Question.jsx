import { View, Text, TouchableOpacity, TextInput } from "react-native";
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


  const [question, setQuestion] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [correctanswer, setCorrectAnswer] = useState("")

  console.log(question, answer1, answer2, answer3, answer4, correctanswer)

  
    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
        };
        storeAccessToken();
   
  const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/edit";

  
  
  const submitAnswer =  () => {
     axios.post(
        url,
        payload,
        { headers: {"Authorization" : `Bearer ${accessToken}`} }
      )
      .then((response) => {
        console.log(response.data)
        alert("Question ID" + "\n" + response.data.id + " successfully created")
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const payload = {
    "question": question,
    "answer1": answer1,
    "answer2": answer2,
    "answer3": answer3,
    "answer4": answer4,
    "correctanswer": correctanswer
  }
  
  

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TextInput
        style={{
          marginTop: 40,
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 40,
        }}
        placeholder="Đặt câu hỏi ở đây"
        onChangeText={setQuestion}
      />
      
      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected1 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setSelected2(false)
          setSelected3(false)
          setSelected4(false)
          selected1 == false ? setSelected1(true) : setSelected1(false)
          setCorrectAnswer(answer1)
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>A</Text>
        </View>
        <TextInput style={styles.answerText} placeholder="Đáp án thứ nhất" onChangeText={
         setAnswer1}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected2 == false ? "#34A0A4":"blue",}]}

        onPress={() => {
          setSelected1(false)
          setSelected3(false)
          setSelected4(false)
          selected2 == false ? setSelected2(true) : setSelected2(false)
          setCorrectAnswer(answer2)


        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>B</Text>
        </View>
        <TextInput style={styles.answerText} placeholder="Đáp án thứ hai" onChangeText={setAnswer2}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected3 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setSelected1(false)
          setSelected2(false)
          setSelected4(false)
          selected3 == false ? setSelected3(true) : setSelected3(false)
          setCorrectAnswer(answer3)


        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>C</Text>
        </View>
        <TextInput style={styles.answerText} placeholder="Đáp án thứ ba" onChangeText={setAnswer3}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableOp, {backgroundColor: selected4 == false ? "#34A0A4":"blue",}]}
        onPress={() => {
          setSelected1(false)
          setSelected2(false)
          setSelected3(false)
          selected4 == false ? setSelected4(true) : setSelected4(false)
          setCorrectAnswer(answer4)


        }}
      >
        <View style={styles.circle}>
          <Text style={styles.option}>D</Text>
        </View>
        <TextInput style={styles.answerText} placeholder="Đáp án thứ tư" onChangeText={setAnswer4}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={()=>{
            submitAnswer()
        }}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>



    </View>
  );
};

export default Question;
