import React from "react";
import { View, StyleSheet,  } from "react-native";

import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Question from "./Question/Question";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
const QuestionScreen = ({route, navigation }) => {

  const { question, answer1, answer2, answer3, answer4, id, correctanswer } = route.params;


  

  return (
   <View>
    <Question question={question} answer1={answer1} answer2={answer2} answer3={answer3} answer4={answer4} id={id} correctanswer={correctanswer}/>
   </View>
  );
};


export default QuestionScreen;
