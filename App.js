import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/HomeScreen";
import LoginScreen from "./src/LoginScreen";
import MapScreen from "./src/MapScreen";
import InitScreen from "./src/InitScreen";
import CreateScreen from "./src/CreateScreen";
import PermissionScreen from "./src/PermissionScreen";

const AppNavigator = createStackNavigator({
  InitScreen: {
    screen: InitScreen,
  },
  PermissionScreen:{
    screen: PermissionScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  HomeScreen: {
    screen: HomeScreen
  },
  MapScreen:{
    screen: MapScreen,
  },
  CreateScreen:{
    screen: CreateScreen,
  }
},{
  headerMode: 'none',
  mode: 'card',
});

export default createAppContainer(AppNavigator);