import React from "react";
import { View, StyleSheet, ListRenderItem } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HEADER_HEIGHT = 250;

import HeaderQuizMain from "./Header/Header";
import Question from "./Question/Question";

const QuizMain = ({ navigation }) => {
  const [accessToken, setAccessToken] = useState("");
  const [question, setQuestion] = useState("");
  const [score, setScore] = useState(0);

  const getBackPressed = () => {
    console.log("hello");
  };
  const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit";

  const endQuizPressed = () => {
    //console.log(payload)
    axios
      .post(
        url,
        payload,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
     
        let count = 0
        for (let i = 0; i < response.data.length; i++){
          const ans = response.data[i].result
          if (String(ans) == "true"){
            count += 1
            setScore(count);
          }
        }
        
        if(score != 0){
          navigation.navigate("Quiz Result", {totalScore: score});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const storeAccessToken = async () => {
    try {
      setAccessToken(await AsyncStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };
  storeAccessToken();

  const getQuestionUser = () => {
    axios
      .get(
        "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions?page=1&limit=8",
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        setQuestion(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!question) {
    getQuestionUser();
  }




  var payload = [];
  const submitAnswer = (question_id, chosen_answer) => {
    payload.push({
      id: question_id,
      correctanswer: chosen_answer,
    });
    console.log(payload);
  };
  return (
    <Tabs.Container
      renderHeader={HeaderQuizMain}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="1">
        <Tabs.ScrollView>
          <Question
            question={question[0]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[0]?.["id"]}
            answer1={question[0]?.["answer1"]}
            answer2={question[0]?.["answer2"]}
            answer3={question[0]?.["answer3"]}
            answer4={question[0]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="2">
        <Tabs.ScrollView>
          <Question
            question={question[1]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[1]?.["id"]}
            answer1={question[1]?.["answer1"]}
            answer2={question[1]?.["answer2"]}
            answer3={question[1]?.["answer3"]}
            answer4={question[1]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="3">
        <Tabs.ScrollView>
          <Question
            question={question[2]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[2]?.["id"]}
            answer1={question[2]?.["answer1"]}
            answer2={question[2]?.["answer2"]}
            answer3={question[2]?.["answer3"]}
            answer4={question[2]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="4">
        <Tabs.ScrollView>
          <Question
            question={question[3]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[3]?.["id"]}
            answer1={question[3]?.["answer1"]}
            answer2={question[3]?.["answer2"]}
            answer3={question[3]?.["answer3"]}
            answer4={question[3]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="5">
        <Tabs.ScrollView>
          <Question
            question={question[4]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[4]?.["id"]}
            answer1={question[4]?.["answer1"]}
            answer2={question[4]?.["answer2"]}
            answer3={question[4]?.["answer3"]}
            answer4={question[4]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="6">
        <Tabs.ScrollView>
          <Question
            question={question[5]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[5]?.["id"]}
            answer1={question[5]?.["answer1"]}
            answer2={question[5]?.["answer2"]}
            answer3={question[5]?.["answer3"]}
            answer4={question[5]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="7">
        <Tabs.ScrollView>
          <Question
            question={question[6]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[6]?.["id"]}
            answer1={question[6]?.["answer1"]}
            answer2={question[6]?.["answer2"]}
            answer3={question[6]?.["answer3"]}
            answer4={question[6]?.["answer4"]}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="8">
        <Tabs.ScrollView>
          <Question
            question={question[7]?.["question"]}
            onPress={endQuizPressed}
            submitAnswer={submitAnswer}
            setScore={setScore}
            id={question[7]?.["id"]}
            answer1={question[7]?.["answer1"]}
            answer2={question[7]?.["answer2"]}
            answer3={question[7]?.["answer3"]}
            answer4={question[7]?.["answer4"]}
          />
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
