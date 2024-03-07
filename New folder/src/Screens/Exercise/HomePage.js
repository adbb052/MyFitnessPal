import * as React from "react";
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";
import Exercises from "../../Components/Exercises";

export default function HomePage({ navigation }) {
  return (
    //SafeAreaView renders content within the safe area boundaries of a device
    <SafeAreaView>
      <View
        //This is the code for the border/title section of the app which will be a consistent feature throughout the app
        style={{
          height: 105,
          width: "100%",
          padding: 10,
          backgroundColor: "#EE9A4D",
          borderRadius: 25,
        }}
      >
        <Text
          //This is the code for the design of the header
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginTop: 1,
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          MyHealthPal{" "}
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        ></View>

        <View>
          <Text
            //This is the code for the design of the sub-header
            style={{
              marginTop: -20,
              color: "white",
              fontSize: 12.5,
              textAlign: "center",
            }} //short description below of the HomePage
          >
            This is the HomePage of the app MyHealthPal. Below you can filter
            through 4 different body types to exercise. You can also use the
            BMI, QUIZ and ToDo applications for maximum benefit.
          </Text>
        </View>
        <Exercises />
      </View>

      <Pressable
        //This section is the BMI image and pressable navigation which leads you to the BMI section of the app
        onPress={() => {
          navigation.navigate("BMI");
        }}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 10,
          borderRadius: 6,
          top: 460,
          right: 100,
          // bottom: 300,
        }}
      >
        <View>
          <Image
            //This is the image source of the BMI section
            style={{ width: 70, height: 70 }}
            source={require("../../../assets/HomePageImages/bmi.png")}
          />

          <Text
            style={{
              //Design of the word BMI
              position: "absolute",
              color: "#EE9A4D",
              fontSize: 20,
              fontWeight: "bold",
              left: 15,
              top: 70,
            }}
          >
            BMI
          </Text>
        </View>
      </Pressable>

      <Pressable
        //This section is the Quiz image and pressable navigation which leads you to the Quiz section of the app
        onPress={() => {
          navigation.navigate("Quiz");
        }}
        style={{
          //Design of the image
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          top: 360,
        }}
      >
        <View>
          <Image //This is the image source
            style={{ width: 70, height: 70 }}
            source={require("../../../assets/HomePageImages/quiz.png")}
          />

          <Text
            style={{
              position: "absolute",
              color: "#EE9A4D",
              fontSize: 20,
              fontWeight: "bold",
              left: 15,
              top: 67,
            }}
          >
            QUIZ
          </Text>
        </View>
      </Pressable>

      <Pressable
        //This section is the ToDo image and pressable navigation which leads you to the Todo section of the app

        onPress={() => {
          navigation.navigate("ToDo");
        }}
        style={{
          //Design for image
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          top: 250,
          left: 105,
        }}
      >
        <View>
          <Image
            //Image source for the TodoList
            style={{ width: 70, height: 70 }}
            source={require("../../../assets/HomePageImages/frame.png")}
          />

          <Text
            style={{
              //Design for the word ToDo
              position: "absolute",
              color: "#EE9A4D",
              fontSize: 19,
              fontWeight: "bold",
              left: 15,
              top: 67,
            }}
          >
            TODO
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
