import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./screens/Register";
import Otp from "./screens/Otp";

export default function App() {
  return (
    <>
      <Otp/>
      {/* <Register /> */}
      <StatusBar barStyle="light-content" backgroundColor="#546E7A" />
    </>
  );
}

const styles = StyleSheet.create({});
