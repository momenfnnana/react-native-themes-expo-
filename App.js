import React from "react";
import { useColorScheme } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  CounterScreen,
  HomeScreen,
  NotificationsScreen,
  ProductDetailsScreen,
} from "./src/screens";
import DrawerContent from "./DrawerContent";
import { DarkValues, LightValues } from "./src/utils/theme/colors";

const Drawer = createDrawerNavigator();
const screenOptions = {
  drawerPosition: "left",
  drawerType: "back",
};
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkValues : LightValues}>
      <Drawer.Navigator
        initialRouteName="Counter"
        screenOptions={screenOptions}
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Drawer.Screen name="Counter" component={CounterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
