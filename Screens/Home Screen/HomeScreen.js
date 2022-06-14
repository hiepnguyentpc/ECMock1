import React from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import Header from "./Components/Header/Header";
import TabViewA from "./Components/Tab View/Tab View A/TabViewA";
import TabViewB from "./Components/Tab View/Tab View B/TabViewB";
const HEADER_HEIGHT = 250;
const HomeScreen = ({ navigation }) => {

  const buttonPressed=()=>{
    navigation.navigate('Quiz Screen')
  }

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="Computer Science">
        <Tabs.ScrollView>


            <TabViewA buttonPressed = {buttonPressed}/>


        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="UI/ UX Design">
        <Tabs.ScrollView>
          <TabViewB />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
});

export default HomeScreen;
