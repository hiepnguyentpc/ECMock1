import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import IDCard from "./CardComponent/IDCard";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const GetUserScreen = () => {
  const [accessToken, setAccessToken] = useState("");
  const [data, setData] = useState("");

  const getAccessToken = async () => {
    try {
      setAccessToken(await AsyncStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };
  getAccessToken();

  const getUsers = () => {
    axios
      .get("https://fwa-ec-quiz-mock1.herokuapp.com/v1/users/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setData(response.data.results);
        //console.log(data[0].email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
<LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
    <View>
    <TouchableOpacity style={styles.button} onPress={() => getUsers()}>
        <Text style={styles.buttonText}>Get DATA</Text>
      </TouchableOpacity>
      <FlatList
        style={{left:-10, marginTop:40}}
        data = {data}
        renderItem = {({item}) => <IDCard IDData={item}/>}
        />

    </View>
          
    </LinearGradient>
  );
};

export default GetUserScreen;
