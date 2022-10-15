import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const counterActions = {
  increament: "increament",
  decreament: "decreament",
  reset: "reset",
};

const CounterScreen = () => {
  const [counter, setCounter] = useState(1);
  const [userData, setUserData] = useState({
    name: "Momen",
    age: 24,
  });

  const counterHandler = (type) => {
    setCounter((currentValue) => {
      switch (type) {
        case counterActions.increament:
          return currentValue + 1;
        case counterActions.decreament:
          return currentValue < 1 ? 0 : currentValue - 1;
        case counterActions.reset:
          return 0;
        default:
          return currentValue;
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={userData.name}
        onChangeText={(value) => setUserData({ ...userData, name: value })}
      />
      <Text style={{ fontSize: 60 }}>
        {userData.name} {userData.age}
      </Text>
      <View style={styles.row}>
        <AntDesign
          name="minuscircle"
          size={24}
          color="black"
          onPress={() => counterHandler(counterActions.decreament)}
        />
        <Text style={{ fontSize: 60, marginHorizontal: 20 }}>{counter}</Text>
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          onPress={() => counterHandler(counterActions.increament)}
        />
      </View>
      <Button
        onPress={() => counterHandler(counterActions.reset)}
        title="reset"
      />
    </View>
  );
};

export default CounterScreen;
