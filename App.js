import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./src";
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.6)"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
}
