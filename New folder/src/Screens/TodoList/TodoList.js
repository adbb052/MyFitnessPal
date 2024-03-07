import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import Objectives from "../../Components/Objectives";

export default function TodoList() {
  const [objective, setObjective] = useState();
  const [objectiveItems, setObjectiveItems] = useState([]);

  const objectiveComplete = (index) => {
    let itemsCopy = [...objectiveItems];
    itemsCopy.splice(index, 1);
    setObjectiveItems(itemsCopy);
  };

  const addObjective = () => {
    Keyboard.dismiss();
    setObjectiveItems([...objectiveItems, objective]);
    setObjective(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#EE9A4D",
          padding: 10,
          height: 130,
          width: "100%",
          borderRadius: 12,
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
            marginTop: 10,
          }}
        ></View>
        <View>
          <Text style={{ marginTop: 5, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          {objectiveItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => objectiveComplete(index)}
              >
                <Objectives text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          position: "absolute",
          bottom: 50,
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
        }}
      >
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: "#EE9A4D",
            borderRadius: 20,
            color: "white",
            width: 200,
          }}
          placeholder={"Write an objective"}
          value={objective}
          onChangeText={(text) => setObjective(text)}
        />
        <TouchableOpacity onPress={() => addObjective()}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EE9A4D",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 30 }}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
