import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios';
import Navigation from "./navigation/Navigation";


axios.defaults.baseURL = `http://172.16.122.132:5000`


export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar barStyle="light-content" backgroundColor="#546E7A" />
    </>
  );
}

const styles = StyleSheet.create({});
