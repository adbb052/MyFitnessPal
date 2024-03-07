import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [description, setDescription] = useState("");

  const calculateBmi = () => {
    //Formula fo calculating BMI
    const bmi = weight / ((height / 100) * (height / 100));
    setBMI(bmi.toFixed(1));

    if (bmi < 18.5) {
      //these are the if statements which will return a statement based on your BMI.
      setDescription("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("Normal");
    } else if (bmi > 25 && bmi <= 29.9) {
      setDescription("Overweight");
    } else if (bmi >= 30) {
      setDescription("Obese");
    }
  };
  return (
    <SafeAreaView>
      <View //Design for border/title
        style={{
          backgroundColor: "#EE9A4D",
          padding: 10,
          height: 107,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            marginTop: 5,
            textAlign: "center",
          }}
        >
          {" "}
          BMI Calculator{" "}
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
          <Text
            style={{
              marginTop: -20,
              color: "white",
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Body mass index, or BMI, is one approach to determine if your weight
            is healthy for your height. The outcome shows if you are a healthy
            weight for your height and, if not, how overweight or underweight
            you are.
          </Text>
        </View>
      </View>

      <View
        style={{
          color: "white",
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          color: "#EE9A4D",
        }}
      >
        Enter Your Details Below
      </Text>

      <TextInput
        style={{
          height: 55,
          margin: 15,
          width: 300,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#EE9A4D",
          fontSize: 18,
        }}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight in (cm)"
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={{
          height: 55,
          margin: 15,
          width: 300,

          padding: 10,
          borderRadius: 5,
          backgroundColor: "#EE9A4D",
          fontSize: 18,
        }}
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height in (kg)"
        keyboardType="numeric"
      ></TextInput>

      <TouchableOpacity
        style={{
          backgroundColor: "#FFA62F",
          borderRadius: 15,
          padding: 7,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 14,
          height: 50,
          width: 200,
        }}
        onPress={calculateBmi}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
          Calculate Your BMI
        </Text>
      </TouchableOpacity>
      <View
        style={{
          margin: 20,
          backgroundColor: "#FFA62F",
          borderRadius: 15,
          padding: 7,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 25,
          height: 50,
          width: 350,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
          Your BMI is {bmi} which makes you {description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BMICalculator;

const styles = StyleSheet.create({});
