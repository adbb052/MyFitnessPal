import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Pressable } from "react-native";
import QuestionData from "../../Data/QuestionData";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";

const QuizScreen = () => {
  const navigation = useNavigation();
  const Data = QuestionData;
  const totalQuestions = Data.length;
  const [choice, setChoice] = useState(null);
  const answer = useState([]);
  const [score, setScore] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (chosenAnswer !== null) {
      if (chosenAnswer === currentQuestion?.correctChosenAnswer) {
        setScore((score) => score + 10);
        setChoice(true);
        answer.push({ Question: index + 1, answer: true });
      } else {
        setChoice(false);
        answer.push({ Question: index + 1, answer: false });
      }
    }
  }, [chosenAnswer]);

  useEffect(() => {
    setChosenAnswer(null);
    setChoice(null);
  }, [index]);

  const currentQuestion = Data[index];

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#EE9A4D",
          padding: 10,
          height: 105,
          width: "100%",
          marginTop: 30,
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
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            Question number : ({index} out of {totalQuestions})
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFA62F",
          marginTop: 20,
          padding: 10,
          borderRadius: 7,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          {currentQuestion?.Question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.Option.map((item, index) => (
            <Pressable
              onPress={() => chosenAnswer === null && setChosenAnswer(index)}
              style={
                chosenAnswer === index &&
                index === currentQuestion.correctChosenAnswer
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : chosenAnswer != null && chosenAnswer === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
              key={index}
            >
              {chosenAnswer === index &&
              index === currentQuestion.correctChosenAnswer ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="check"
                  size={20}
                  color="white"
                />
              ) : chosenAnswer != null && chosenAnswer === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                    color: "white",
                  }}
                >
                  {item.Option}
                </Text>
              )}

              <Text style={{ marginLeft: 10, color: "white" }}>
                {item.answer}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          choice === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {choice === null ? null : (
          <Text
            style={
              choice == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!choice ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= QuestionData.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                score: score,

                answer: answer,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : choice === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "orange",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
