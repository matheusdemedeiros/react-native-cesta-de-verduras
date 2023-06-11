import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppText({ children, style }) {
  let styleSetted = styles.text;
  if(style?.fontWeight === "bold"){
    styleSetted = styles.textBold;
  }
  
  return <Text style={[style, styleSetted]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
