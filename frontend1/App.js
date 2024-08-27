import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./screens/Register";
import Otp from "./screens/Otp";
import axios from 'axios';


axios.defaults.baseURL = `http://172.16.122.132:5000`


export default function App() {
  return (
    <>
      {/* <Otp/> */}
      <Register />
      <StatusBar barStyle="light-content" backgroundColor="#546E7A" />
    </>
  );
}

const styles = StyleSheet.create({});
