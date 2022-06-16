import React from "react";
import { View, StyleSheet, ListRenderItem } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

const HEADER_HEIGHT = 250;

import HeaderQuizMain from "./Header/Header";
import Question from "./Question/Question";

const QuizMain = () => {
  const getBackPressed = () => {
    console.log("hello");
  };

  return (
    <Tabs.Container
      renderHeader={HeaderQuizMain}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="1">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="2">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="3">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="4">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="5">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="6">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="7">
        <Tabs.ScrollView>
          <Question />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="8">
        <Tabs.ScrollView>
          <Question />
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
