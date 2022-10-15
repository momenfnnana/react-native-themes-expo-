import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";

const DrawerContent = (props) => {
  const focused = props.state.routes.findIndex(
    (e, index) => index === props.state.index
  );
  const {colors,dark}=useTheme()
  return (
    <View
      style={{
        marginTop: 50,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: focused === props.state.index ? "red" : "blue",
        }}
        onPress={() => props.navigation.navigate("Home")}
        // onPress={() => setIsDark((currentValue) => !currentValue)}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: focused === props.state.index ? "red" : "blue",
        }}
        onPress={() => props.navigation.navigate("Notifications")}
      >
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: focused === props.state.index ? "red" : "blue",
        }}
        onPress={() => props.navigation.navigate("ProductDetails")}
      >
        <Text>ProductDetails</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: colors.text }}>
          {dark ? "switch to light" : "switch to dark"}
        </Text>
        {/* <Switch value={isDark} onValueChange={setIsDark} /> */}
      </View>
    </View>
  );
};

export default DrawerContent;
