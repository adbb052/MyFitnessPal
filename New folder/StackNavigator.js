import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizPage from "./src/Screens/QuizScreens/QuizPage";
import TodoList from "./src/Screens/TodoList/TodoList";
import BMICalculator from "./src/Screens/BMI/BMICalculator";
import QuizQuestions from "./src/Screens/QuizScreens/QuizQuestions";
import ResultsScreen from "./src/Screens/QuizScreens/FinalResults";
import Break from "./src/Screens/Exercise/Break";
import Action from "./src/Screens/Exercise/Action";
import Details from "./src/Screens/Exercise/Details";
import HomePage from "./src/Screens/Exercise/HomePage";
import Completion from "./src/Screens/Exercise/Completion";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Action" component={Action} />
        <Stack.Screen name="Break" component={Break} />
        <Stack.Screen name="Quiz" component={QuizPage} />
        <Stack.Screen name="ToDo" component={TodoList} />
        <Stack.Screen name="BMI" component={BMICalculator} />
        <Stack.Screen name="Questions" component={QuizQuestions} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Completion" component={Completion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
