import { StyleSheet } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Otp from "../screens/Otp";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#FFA726',
          headerTitleStyle: styles.headerTitle,
          headerPressColor: "#546E7A",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#36454F',
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: { height: 0 },
    shadowRadius: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#FFA726',
  },
});
