import React from "react";
import { View, Text, Button } from "react-native";
import {
  DrawerActions,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

function HomeScreen() {
  const { dispatch, navigate } = useNavigation();
  // to get colors and if is dark mode for active theme
  const { colors, dark } = useTheme();
  return (
    <View style={styles.container}>
      <Entypo
        name="menu"
        size={24}
        color="black"
        onPress={() => dispatch(DrawerActions.toggleDrawer())}
      />
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
            backgroundColor: colors.button,
          },
        ]}
      >
        {dark ? "dark theme" : "light theme"}
      </Text>
      <Button
        onPress={() => navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

export default HomeScreen;
