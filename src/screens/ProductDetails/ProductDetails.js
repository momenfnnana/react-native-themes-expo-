import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

function ProductDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
export default ProductDetailsScreen;
