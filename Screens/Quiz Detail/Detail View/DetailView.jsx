import { View, Text } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const DetailView = (props) => {
    
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}> Brief Explanation about this quiz</Text>

        <View style={styles.totalPoints}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.circle}>
              <AntDesign name="filetext1" size={16} color="white" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                8 Questions
              </Text>
              <Text style={{ fontSize: 14, color: "#999999" }}>
                12.5 points for a correct answer
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.totalPoints}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.circle}>
              <AntDesign name="clockcircleo" size={16} color="white" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                15 min
              </Text>
              <Text style={{ fontSize: 14, color: "#999999" }}>
                Total duration of the quiz
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.totalPoints}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.circle}>
              <AntDesign name="staro" size={16} color="white" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Win 10 star
              </Text>
              <Text style={{ fontSize: 14, color: "#999999" }}>
                Answer all questions correctly
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.titleText2}>
          Please read the text below carefully so you can understand it
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 36,
            marginTop: 30,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={styles.circleSmall}></View>
          <Text style={styles.titleText3}>
            10 point awarded for a correct answer and no {"\n"}marks for a
            incorrect answer
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 36,
            marginTop: 30,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={styles.circleSmall}></View>
          <Text style={styles.titleText3}>
            Tap on options to select the correct answer
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 36,
            marginTop: 30,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={styles.circleSmall}></View>
          <Text style={styles.titleText3}>
            Tap on the bookmark icon to save interesting {"\n"} questions{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 36,
            marginTop: 30,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={styles.circleSmall}></View>
          <Text style={styles.titleText3}>
            Click submit if you are sure you want to {"\n"}complete all the
            quizzes
          </Text>
        </View>

        <TouchableOpacity style={styles.button}
            
            onPress = {props.buttonPress}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailView;
