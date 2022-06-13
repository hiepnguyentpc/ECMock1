import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function FirstScreen({navigation}) {

    const signUpPress=() => {
        navigation.navigate('Sign Up Screen')
    }
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
      <View style={{ flexDirection: "column" }}>
        <Image
          style={styles.mainImage}
          source={{
            uri: "https://user-images.githubusercontent.com/43158356/172126265-6922d4e5-4413-4d65-8213-82c690ad3b5b.png",
          }}
        />

        <View style={{top: 80}}>
          <Text style={styles.appNameText}>QuizzMe</Text>
          <Text style={styles.infoText}>Test your knowledge!</Text>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={signUpPress}
          >
            <Text style = {styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style = {styles.logInText}>ALREADY HAVE AN ACCOUNT?<Text onPress={()=> navigation.navigate('Log In Screen')} style = {{ color: 'black' }}> LOG IN</Text></Text>
        </View>
      </View>
    </LinearGradient>
  );
}
