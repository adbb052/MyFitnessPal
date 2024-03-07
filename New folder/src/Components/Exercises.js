import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import ExerciseData from "../Data/ExerciseData";
import { useNavigation } from "@react-navigation/native";
import Details from "../Screens/Exercise/Details";

const Exercises = () => {
  const navigation = useNavigation();
  const Data = ExerciseData;

  return (
    <View>
      {Data.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Details", {
              image: item.image,
              workout: item.workout,
              id: item.id,
            })
          }
          key={key}
        >
          <Image
            style={{
              marginTop: 20,
              padding: 5,
              width: "50%",
              height: 85,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              borderRadius: 9,
            }}
            source={item.image}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              position: "absolute",
              color: "#EE9A4D",
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Exercises;
