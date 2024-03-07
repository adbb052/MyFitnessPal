import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Completion = () => {
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
          }}
        >
          {" "}
          Completion{" "}
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
            Did you manage to complete all the exercises? Try to train other
            muscle groups at the HomePage.
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "#EE9A4D",
          padding: 30,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Congratulations on completing this set of exercises
      </Text>
      <View style={{ alignItems: "center" }}>
        <CircularProgress
          value={100}
          radius={120}
          alignItems={"center"}
          textColor={"#ECF0F1"}
          activeStrokeColor={"#F39C12"}
          inActiveStrokeColor={"red"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          titleColor={"#ECF0F1"}
          titleStyle={{ fontWeight: "bold" }}
          duration={4000}
          valueSuffix={"%"}
        />
      </View>

      <View>
        <Pressable
          style={{ alignItems: "center", padding: 30 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="home" size={60} color="#EE9A4D" />
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            marginTop: -20,
            color: "#EE9A4D",
            fontSize: 21,
          }}
        >
          HOME
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Completion;

const styles = StyleSheet.create({});
