import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";

const Otp = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.innercontainer}>
        <Text style={s.infohead}>Enter verification code</Text>
        <Text style={s.infotext}>Send to your mobile number</Text>
        <OtpInput
          numberOfDigits={4}
          onTextChange={(e) => console.log(e)}
          focusColor="#FFA726"
          focusStickBlinkingDuration={400}
          theme={{
            pinCodeContainerStyle: {
              backgroundColor: "#FFF",
              width: 50,
            },
            containerStyle: {
              paddingHorizontal: "10%",
              marginBottom: "5%",
            },
          }}
        />

        <TouchableOpacity>
          <View style={s.oneline}>
            <Text style={s.infotext}>
              Don't received the code?{" "}
              <Text style={{ color: "#FFA726" }}>Resend code</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={s.submit}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36454F",
  },
  innercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infohead: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  infotext: {
    marginBottom: 30,
    color: "#FFF",
  },
  submit: {
    width: "80%",
    backgroundColor: "#FFA726",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: "5%",
  },
  oneline: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});
