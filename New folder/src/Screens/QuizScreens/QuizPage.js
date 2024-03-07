import { Text, View, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const QuizPage = () => {
  const navigation = useNavigation();
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
            textAlign: "center",
          }}
        >
          {" "}
          Quiz{" "}
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
          <Text style={{ marginTop: -20, color: "white", textAlign: "center" }}>
            This is the quiz section of the app where we will be testing your
            knowledge using a multiple choice format. The rules are shown below.{" "}
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            marginTop: 15,
            color: "#FFA62F",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Rules for the Quiz
        </Text>
        <View>
          <Text style={{ textAlign: "center", padding: 20, fontSize: 17 }}>
            {" "}
            - There will be a total of 10 questions
            {"\n"}
            {"\n"}- Each question will be worth 10 marks {"\n"}
            {"\n"}- Total of Quiz will add up to 100
            {"\n"}
            {"\n"}- You have to answer all the questions {"\n"}
            {"\n"}- GOOD LUCK
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Questions")}
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
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
            Start The Quiz
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default QuizPage;
