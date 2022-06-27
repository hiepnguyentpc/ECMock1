import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const IDCard = ({ IDData }) => {
  const { username, email, id, avatar, role, isEmailVerified } =
    IDData;

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={{ url: avatar }} />
        <View style={styles.card}>
          <View style={{ flexDirection: "column", marginLeft: 25, top: 4 }}>
            <Text style={styles.description}>{username}</Text>
            <Text style={styles.tag}>
              ID:{" "}
              <Text style={styles.description}>{id}</Text>
            </Text>
            <Text style={styles.tag}>
              Email:{" "}
              <Text style={styles.description}>{email}</Text>
            </Text>
            
            
            <Text style={styles.tag}>
              Đã xác nhận email:{" "}
              <Text style={styles.description}>{String(isEmailVerified)}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", zIndex: 1, top: -65, right: -50 }}>
        <View style={styles.roleTag}>
          <Text style={styles.roleDescription}>{role}</Text>
        </View>

        <View style={styles.CircleShapeView}>
          <Ionicons name="call" size={25} />
        </View>

        <View style={styles.CircleShapeView}>
          <Ionicons name="chatbox" size={25} />
        </View>
      </View>
    </View>
  );
};

export default IDCard;
