import React from "react";
import { View, StyleSheet, ListRenderItem } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import Questions from '/Users/hiepnnguyen/Downloads/ECMock1-main/assets/questions.json'

import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HEADER_HEIGHT = 250;

import HeaderQuizMain from "./Header/Header";
import Question from "./Question/Question";

const QuizMain = () => {
  const getBackPressed = () => {
    console.log("hello");
  };


  const [accessToken, setAccessToken] = useState("")
  const [question, setQuestion] = useState("")
  const storeAccessToken = async () => {
    try {
      setAccessToken(await AsyncStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };
  storeAccessToken();


  const getQuestionUser = async () => {
    axios.get(
      "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions?page=1&limit=8",
      { headers: {"Authorization" : `Bearer ${accessToken}`} }
    )
    .then((response) => {
      setQuestion(response.data.results)
    })
    .catch((error) => {
      console.log(error);
    });
  };
  getQuestionUser()


  console.log(question[0])

  
   const q1 = "null" || question[0]
   const id1 = "null" ||q1["id"]

   const q2 = "null" || question[1]
   const id2 = "null" ||q2["id"]

   const q3 = "null" ||question[2]
   const id3 = "null" ||q3["id"]

   const q4 = "null" ||question[3]
   const id4 = "null" ||q4["id"]

   const q5 = "null" ||question[4]
   const id5 = "null" ||q5["id"]

   const q6 = "null" ||question[5]
   const id6 = "null" ||q6["id"]

   const q7 = "null" ||question[6]
   const id7 = "null" ||q7["id"]

   const q8 = "null" || question[7]
   const id8 = "null" ||q8["id"]
   //console.log(id8)
   

  return (
    <Tabs.Container
      renderHeader={HeaderQuizMain}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="1">
        <Tabs.ScrollView>
          <Question question={question[0]?.["question"]} answer1={question[0]?.["answer1"]} answer2={question[0]?.["answer2"]} answer3={question[0]?.["answer3"]} answer4={question[0]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="2">
        <Tabs.ScrollView>
          <Question question={question[1]?.["question"]} answer1={question[1]?.["answer1"]} answer2={question[1]?.["answer2"]} answer3={question[1]?.["answer3"]} answer4={question[1]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="3">
        <Tabs.ScrollView>
          <Question question={question[2]?.["question"]} answer1={question[2]?.["answer1"]} answer2={question[2]?.["answer2"]} answer3={question[2]?.["answer3"]} answer4={question[2]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="4">
        <Tabs.ScrollView>
          <Question question={question[3]?.["question"]} answer1={question[3]?.["answer1"]} answer2={question[3]?.["answer2"]} answer3={question[3]?.["answer3"]} answer4={question[3]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="5">
        <Tabs.ScrollView>
          <Question question={question[4]?.["question"]} answer1={question[4]?.["answer1"]} answer2={question[4]?.["answer2"]} answer3={question[4]?.["answer3"]} answer4={question[4]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="6">
        <Tabs.ScrollView>
          <Question question={question[5]?.["question"]} answer1={question[5]?.["answer1"]} answer2={question[5]?.["answer2"]} answer3={question[5]?.["answer3"]} answer4={question[5]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="7">
        <Tabs.ScrollView>
          <Question question={question[6]?.["question"]} answer1={question[6]?.["answer1"]} answer2={question[6]?.["answer2"]} answer3={question[6]?.["answer3"]} answer4={question[6]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="8">
        <Tabs.ScrollView>
          <Question question={question[7]?.["question"]} answer1={question[7]?.["answer1"]} answer2={question[7]?.["answer2"]} answer3={question[7]?.["answer3"]} answer4={question[7]?.["answer4"]}/>
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
});

export default QuizMain;
