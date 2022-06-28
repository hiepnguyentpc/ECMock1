import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

const QuizButton = (props) => {
  return (
    <TouchableOpacity style={styles.container}
        onPress={props.buttonPressed}
    >
      <View style={styles.quizContainer}>
        <Image
          style={styles.quizImage}
          source={{
            uri: props.img_url,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 30,
          }}
        >
          <Text style={styles.quizName}>{props.quizName}</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="profile"
              size={11}
              color="grey"
              style={{ marginTop: 4, marginRight: 4 }}
            />
            <Text style={styles.descriptionText}>10 Question</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="clockcircleo"
              size={11}
              color="grey"
              style={{ marginTop: 4, marginRight: 4 }}
            />
            <Text style={styles.descriptionText}>1 hour 15 min</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignSelf: "center", marginLeft: 50 }}
        >
          <AntDesign name="star" size={24} color="#F2C94C" />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "blue",
            }}
          >
            {" "}
            4.0
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuizButton;
