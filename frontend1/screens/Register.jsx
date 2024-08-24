import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [regNo, setRegNO] = useState();

  const handleSubmit = () => {
    try {
      if (phoneNo.length !== 10) {
        ToastAndroid.show("Phone number not valid", ToastAndroid.SHORT);
        return;
      }
      if (regNo.length <= 5) {
        ToastAndroid.show("Register number not valid", ToastAndroid.SHORT);
        return;
      }
      console.log(name, phoneNo, regNo.toUpperCase());
    } catch (err) {
      console.log("Error on submitting!!!!\n" + err);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.heading}>Register</Text>
      <KeyboardAvoidingView>
        <View style={s.input}>
          <TextInput
            style={s.inputBox}
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder="name"
            placeholderTextColor="#FFF"
          />
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <View style={s.input}>
          <TextInput
            style={s.inputBox}
            value={phoneNo}
            onChangeText={(e) => setPhoneNo(e)}
            placeholder="phone no"
            placeholderTextColor="#FFF"
            keyboardType="numeric"
          />
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <View style={s.input}>
          <TextInput
            style={s.inputBox}
            value={regNo}
            onChangeText={(e) => setRegNO(e)}
            placeholder="license plate no"
            placeholderTextColor="#FFF"
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={s.submit} onPress={handleSubmit}>
        <Text>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#36454F",
  },
  heading: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    flexDirection: "row",
    marginBottom: "5%",
  },
  inputBox: {
    width: "100%",
    backgroundColor: "#546E7A",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#FFF",
    paddingVertical: "5%",
  },
  submit: {
    width: "80%",
    backgroundColor: "#FFA726",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical:"5%"
  },
});
