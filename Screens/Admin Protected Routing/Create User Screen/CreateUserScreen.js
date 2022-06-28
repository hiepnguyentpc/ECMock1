import { Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./styles";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

export default function CreateUserScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const [accessToken, setAccessToken] = useState("");

const getAccessToken = async () => {
    try {
      setAccessToken(await AsyncStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };
  getAccessToken();

  const createNewUser = () => {
    axios
      .post(
        "https://fwa-ec-quiz-mock1.herokuapp.com/v1/users/",
        payload,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        console.log(response.data)
        alert("Created User!")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const payload = { 
    "username": username,
    "password":password,
    "email":email,
    "role": role,
  }
  
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.9]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
    
      <View style={styles.container}>
      
        <Text style={styles.createAccountText}>Create an account</Text>

        <View style={styles.emailTextInput}>
          <TextInput style={styles.inputText}
              autoCapitalize='none'
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
          />
        </View>

        <View style={styles.emailTextInput}>
          <TextInput style={styles.inputText}
              autoCapitalize='none'
              placeholder='Username'
              onChangeText={setUsername}
              value={username}  
          />
        </View>

        <View style={styles.emailTextInput}>
          <TextInput style={styles.inputText}
              autoCapitalize='none'
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}  
          />
        </View>

        <View style={styles.emailTextInput}>
          <TextInput style={styles.inputText}
              autoCapitalize='none'
              placeholder='Role'
              onChangeText={setRole}
              value={role}  
          />
        </View>

        <TouchableOpacity style={styles.getStartedButton} onPress={()=> createNewUser()}>
          <Text style={styles.getStartedButtonText}> CREATE NEW USER</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
    </TouchableWithoutFeedback>

    
  );
}
