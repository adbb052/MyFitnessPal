import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Break = () => {
  const [countdown, setCountdown] = useState(5);
  const navigation = useNavigation();
  let count = 0;

  const beginTimer = () => {
    setTimeout(() => {
      if (countdown <= 0) {
        navigation.goBack();
        clearTimeout(count);
      }
      setCountdown(countdown - 1);
    }, 1000);
  };
  useEffect(() => {
    beginTimer();
    //clean up
    return () => clearTimeout(count);
  });
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#EE9A4D",
          padding: 10,
          height: 105,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          {" "}
          Fitness Application{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        ></View>
        <View>
          <Text style={{ marginTop: -20, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          height: 50,
          width: "90%",
          padding: 10,
          backgroundColor: "white",
          borderRadius: 25,
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 5,
            color: "#EE9A4D",
            textAlign: "center",
          }}
        >
          QUICK BREAK
        </Text>
      </View>

      <FontAwesome5
        style={{
          alignItems: "center",
          justifyContent: "center",
          left: 100,
          marginTop: 20,
        }}
        name="stopwatch"
        size={200}
        color="#EE9A4D"
      />

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
          color: "#EE9A4D",
        }}
      >
        {countdown}
      </Text>
    </SafeAreaView>
  );
};

export default Break;
