import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
const HomeScreen = ({navigation}) => {
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
          <TouchableOpacity onPress={() => console.log("back-presed")}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://user-images.githubusercontent.com/43158356/175977642-ebc9f204-0697-4c1e-a678-b061dc21488b.jpeg",
            }}
          />
        </View>
        <View>
          <Text style={styles.helloText}>Hello, Putin</Text>
          <Text style={styles.mainText}>What do you want to do today?</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Create New User")}>
            <Text style={styles.buttonText}>Create a new user!</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Get User")}>
            <Text style={styles.buttonText}>Get user data!</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Get Question By ID</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
