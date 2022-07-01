import { Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from "react-native";
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Keyboard } from "react-native";

import axios from "axios";

export default function SignUpScreen({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password, email)


  const onPress = () => {
    axios.post('https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/register', {
      "username": username,
      "password": password,
      "email": email
    }).then(response => {
      alert("AUTHENTICATED!");
    }).catch(error => {
      alert(error)
    })
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
        <Text style={styles.createAccountText}>Create your account</Text>

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

        <TouchableOpacity style={styles.getStartedButton} onPress={onPress}>
          <Text style={styles.getStartedButtonText}> GET STARTED</Text>
        </TouchableOpacity>

        <Text
          style={styles.forgotPasswordText}
          onPress={() => console.log("forgot password pressed")}
        >
          Forgot Password?
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.forgotPasswordText}>
            I have read and agree with the{" "}
            <Text onPress={() => someAction()} style={{ color: "#0028FD" }}>
              Privacy Policy.
            </Text>
          </Text>

          <CheckBox
            style={{ padding: 16 }}
            onClick={() => {
              console.log("agreed with terms of service");
            }}
          />
        </View>

        <View style={styles.signUpButtonView}>
          <Text style={styles.signUpText}>
            ALREADY HAVE AN ACCOUNT?
            <Text
              onPress={() => navigation.navigate('Log In Screen')}
              style={{ color: "black" }}
            >
              {" "}
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </LinearGradient>



    </TouchableWithoutFeedback>

    
  );
}
