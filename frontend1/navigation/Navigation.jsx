import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Details from "../screens/Details";
import Logs from "../screens/Logs";
import Wallet from "../screens/Wallet";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  function MyTabs() {
    return (
      <></>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopTab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={{ style: { height: 90 } }}>
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Logs" component={Logs} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
