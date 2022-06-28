import { View, useWindowDimensions } from "react-native";
import styles from "./styles";
import Quiz from "./Quiz Component/Quiz";
import * as React from 'react';

const QuizList = () => {

    

    return (
        <View style = {styles.quizContainer}>
          <Quiz/>
        </View>

    );
}
export default QuizList



/*

import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';



export default function TabViewExample() {
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
*/









