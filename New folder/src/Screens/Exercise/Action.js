import { StyleSheet, Text, Image, Pressable, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Action = () => {
  const route = useRoute(); // useRoute is a hook which gives access to route object
  const navigation = useNavigation(); //This helps me navigate through different pages

  const [index, setIndex] = useState(0); //declaring variables
  const workouts = route.params.workout;
  const current = workouts[index];

  return (
    <SafeAreaView //SafeAreaView renders content within the safe area boundaries of a device
    >
      <View
        style={{
          //This is the code for the border/title section of the app which will be a consistent feature throughout the app

          height: 50,
          width: "100%",
          padding: 10,
          backgroundColor: "#EE9A4D",
          borderRadius: 25,
          marginTop: -25,
        }}
      >
        <Text
          style={{
            //This is the code for the design of the header

            fontSize: 15,
            fontWeight: "bold",
            marginTop: 5,
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          Complete the exercise below{" "}
        </Text>
      </View>

      <View
        style={{
          //This is the code for the design of the sub-header

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
          }} //We can obtain the name and sets of the in ExerciseData.js so we do not have to code each indivdual exercise
        >
          {current.name} : {current.sets} REPS
        </Text>
      </View>

      <Image style={{ width: "100%", height: 250 }} source={current.image} />

      {index + 1 >= workouts.length ? (
        <Pressable
          //Once we have iterated through the exercise we can navigate towards the completion screen
          onPress={() => {
            navigation.navigate("Completion");
          }}
          style={{
            borderRadius: 6,
            backgroundColor: "#FF5F1F",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,

            width: "50%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
              fontWeight: "600",
            }}
          >
            CLICK HERE TO BEGIN
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Break");
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "#C04000",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 30,
            borderRadius: 20,
            width: "50%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
              fontWeight: "600",
            }}
          >
            CLICK HERE TO BEGIN
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Break");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            borderRadius: 20,
            marginHorizontal: 22,
            backgroundColor: "#C04000",
            padding: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>PREVIOUS</Text>
        </Pressable>

        {index + 1 >= workouts.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Completion");
            }}
            style={{
              borderRadius: 20,
              marginHorizontal: 22,

              backgroundColor: "#C04000",
              padding: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>NEXT</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Break");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              borderRadius: 20,
              marginHorizontal: 22,
              backgroundColor: "#C04000",
              padding: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>NEXT</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default Action;

const styles = StyleSheet.create({});
