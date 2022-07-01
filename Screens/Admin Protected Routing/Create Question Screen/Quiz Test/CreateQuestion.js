import React from "react";
import { View, StyleSheet, ListRenderItem } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HEADER_HEIGHT = 250;

import HeaderQuizMain from "./Header/Header";
import Question from "./Question/Question";

const CreateQuestionScreen = ({ navigation }) => {
  const [accessToken, setAccessToken] = useState("");
  const [question, setQuestion] = useState("");
  const [score, setScore] = useState(0);

  const getBackPressed = () => {
    console.log("hello");
  };
  const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit";

  const storeAccessToken = async () => {
    try {
      setAccessToken(await AsyncStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };
  storeAccessToken();
/*
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
  */
/*
  var payload = [];
  const submitAnswer = (question_id, chosen_answer) => {
    payload.push({
      id: question_id,
      correctanswer: chosen_answer,
    });
    console.log(payload);
  };
  */

  return (
    <Tabs.Container
      renderHeader={HeaderQuizMain}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="Create a new Question">
        <Tabs.ScrollView>
          <Question/>
          
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

export default CreateQuestionScreen;
