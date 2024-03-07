import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Screens/Exercise/HomePage";
import Details from "../Screens/Exercise/Details";
import Action from "../Screens/Exercise/Action";
import Break from "../Screens/Exercise/Break";
import Completion from "../Screens/Exercise/Completion";
import QuizPage from "../Screens/QuizScreens/QuizPage";
import TodoList from "../Screens/TodoList/TodoList";
import BMICalculator from "../Screens/BMI/BMICalculator";
import QuizQuestions from "../Screens/QuizScreens/QuizQuestions";
import ResultsScreen from "../Screens/QuizScreens/FinalResults";
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
