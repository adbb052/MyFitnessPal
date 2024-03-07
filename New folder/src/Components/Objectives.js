import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Objectives = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#EE9A4D",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        <AntDesign name="exclamationcircleo" size={24} color="white" />
        <Text style={{ maxWidth: "80%", marginLeft: 15, color: "white" }}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default Objectives;
