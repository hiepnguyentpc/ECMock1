import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const HeaderQuizMain = (props) => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginBottom: 10, top: 40 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://user-images.githubusercontent.com/43158356/172803574-8f0a3004-a5ec-44c4-b404-76546cbb1283.jpeg",
            }}
          />
        </View>
        <View>
          <Text style={styles.mainText}>Computer Science Quiz</Text>
          <Text style={styles.helloText}>GET 100 Points</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeaderQuizMain;
