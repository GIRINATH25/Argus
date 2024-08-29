import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [regNo, setRegNO] = useState();

  const handleSubmit = async () => { 
    try {
      const status = await axios.get(`/verifyCarNo/${regNo.toUpperCase()}`);
      if (phoneNo.length !== 10) {
        ToastAndroid.show("Phone number not valid", ToastAndroid.SHORT);
        return;
      }
      console.log(status.data.avail)
      if (regNo.length >= 5 && status.data.avail === false) {
        ToastAndroid.show("Car number not valid", ToastAndroid.SHORT);
        return;
      }
      const store = await axios.post(`/register`,{name:name,phno:phoneNo,regNo:regNo})
      Alert.alert(`${JSON.stringify(store.data)}`)
    } catch (err) {
      console.log("Error on submitting!!!!", err.response ? err.response.data : err.message);
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
        <Text style={s.submitText}>Next →</Text>
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
    fontFamily: 'sans-serif',
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
    fontFamily: 'sans-serif',
  },
  submit: {
    width: "80%",
    backgroundColor: "#FFA726",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: "5%",
  },
  submitText: {
    fontFamily: 'sans-serif',
    color: "#FFF",
  },
});
