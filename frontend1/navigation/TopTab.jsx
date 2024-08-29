import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Details from "../screens/Details";
import Logs from "../screens/Logs";
import Wallet from "../screens/Wallet";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#FFA726",
        tabBarInactiveTintColor: "#FFA726",
        tabBarIndicatorStyle: styles.indicator,
        tabBarPressColor: "#546E7A",
        tabBarItemStyle: ({ focused }) => ({
          backgroundColor: focused ? "#546E7A" : "#36454F",
        }),
      })}
    >
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Logs" component={Logs} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#36454F',
  },
  tabLabel: {
    fontSize: 16,
    fontFamily: 'sans-serif', 
    color: '#FFA726',
  },
  indicator: {
    backgroundColor: '#FFA726',
    height: 5,
  },
});
