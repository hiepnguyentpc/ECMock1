import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import QuizButton from "../QuizButton/QuizButton";
const TabViewA = (props) => {

  
  return (
    <QuizButton
        quizName="CS Foundation"
        img_url="https://user-images.githubusercontent.com/43158356/173530957-bfead3f2-5f0f-433c-8f59-1b827effaac8.png"
        buttonPressed = {props.buttonPressed}
      />

    
  );
};

export default TabViewA;
