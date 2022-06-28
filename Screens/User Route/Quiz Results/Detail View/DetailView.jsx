import { View, Text } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const DetailView = (props) => {

  const totalScore = props.score 
    
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>This is your test report</Text>

        <View style={styles.totalPoints}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.circle}>
              <AntDesign name="filetext1" size={16} color="white" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {totalScore}/8 Questions
              </Text>
              <Text style={{ fontSize: 14, color: "#999999" }}>
                10 point for a correct answer
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
                You achieved {100/8 * totalScore} points
              </Text>
              <Text style={{ fontSize: 14, color: "#999999" }}>
                Answer all questions correctly
              </Text>
            </View>



          </View>
        </View>

        <Text style={styles.titleText2}>
          You did great!
        </Text>

        

        

        

        
        <TouchableOpacity style={styles.button}
            
            onPress = {props.buttonPress}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailView;
