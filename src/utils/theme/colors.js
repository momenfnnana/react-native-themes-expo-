import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const DarkValues = {
  dark: DarkTheme.dark,
  colors: {
    ...DarkTheme.colors,
    // edit existing value
    text: "#f7f",
    // add new value
    button: "red",
  },
};
const LightValues = {
  dark: DefaultTheme.dark,
  colors: {
    ...DefaultTheme.colors,
    // edit existing value
    button: "blue",
    // add new value
    text: "#f7f",
  },
};

export { DarkValues, LightValues };
