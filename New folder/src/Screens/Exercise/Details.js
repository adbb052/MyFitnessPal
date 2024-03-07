import { Text, View, Image, Pressable, ScrollView } from "react-native";
import * as React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const route = useRoute(); // useRoute is a hook which gives access to route object
  const navigation = useNavigation(); //This helps me navigate through different pages

  return (
    <>
      <ScrollView
      //ScrollView allows me to scroll the page as Details screen can hold multiple exercises from Exercises.js
      >
        <View
          style={{
            //This is the code for the border/title section of the app which will be a consistent feature throughout the app

            backgroundColor: "#EE9A4D",
            padding: 10,
            height: 105,
            width: "100%",
          }}
        >
          <Text
            style={{
              //This is the code for the design of the header

              color: "white",
              fontSize: 26,
              fontWeight: "bold",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            {" "}
            Details{" "}
          </Text>
          <View
            style={{
              //This is the code for the design of the sub-header

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              color: "white",
            }}
          ></View>
          <View>
            <Text
              style={{ marginTop: -20, color: "white", textAlign: "center" }} //short description below of the HomePage
            >
              This section depicts all the exercises required to complete this
              muscle area. Pay close attention to the demonstrations below to
              maximise your gains.
            </Text>
          </View>
        </View>

        {route.params.workout.map((item, index) => (
          <Pressable
            //Pass the params to a route by putting them in an object
            style={{
              flexDirection: "row",
              margin: 9,
            }}
            key={index}
          >
            <Image
              //The image styles of the exercises
              style={{
                height: 100,
                width: 100,
              }}
              source={item.image}
            />
            <View style={{ marginTop: 15, marginLeft: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "#EE9A4D" }}
              >
                {item.name}
              </Text>
              <Text style={{ color: "#EE9A4D" }}>{item.sets} Reps</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        //This section navigates onto the next page Action.js where you will be performing the exercises
        onPress={() =>
          navigation.navigate("Action", { workout: route.params.workout })
        }
        style={{
          //style choice for the button
          backgroundColor: "#FFA62F",
          borderRadius: 15,
          padding: 7,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 50,
          height: 50,
          width: 200,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default Details;
