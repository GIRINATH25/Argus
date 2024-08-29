import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopTab from "../navigation/TopTab";

const Home = () => {
  return (
    <SafeAreaView style={s.container}>
      <TopTab />
    </SafeAreaView>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
