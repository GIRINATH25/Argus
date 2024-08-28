import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios';
import Navigation from "./navigation/Navigation";
import Register from "./screens/Register";
import Otp from "./screens/Otp";
import Home from "./screens/Home";


axios.defaults.baseURL = `http://172.16.122.132:5000`


export default function App() {
  return (
    <>
      {/* <Otp/> */}
      {/* <Register /> */} 
      {/* <Home /> */}
      <Navigation />
      {/* <StatusBar barStyle="light-content" backgroundColor="#546E7A" /> */}
    </>
  );
}

const styles = StyleSheet.create({});
