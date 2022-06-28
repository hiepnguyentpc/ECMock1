import { View, Text, TextInput, Image, SafeAreaView } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (

    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
    <View style={styles.container}>
        <View style={{ flexDirection: "row", marginBottom: 10, top:40, }}>
          <Ionicons name="menu" size={25} color="white" />
          <Image
            style={styles.avatar}
            source={{
              uri: "https://user-images.githubusercontent.com/43158356/172803574-8f0a3004-a5ec-44c4-b404-76546cbb1283.jpeg",
            }}
          />
        </View>
        <View >
          <Text style={styles.helloText}>Hello, Hiep</Text>
          <Text style={styles.mainText}>Let's test your knowledge</Text>
        </View>

        <View style={styles.searchBar}>
          <Ionicons
            name="search-outline"
            size={25}
            color="blue"
            style={{ top: 12, left: 15 }}
          />
          <TextInput placeholder="Search" style={styles.inputText} />
        </View>
      </View>

    </LinearGradient>
      
  );
};

export default Header;
