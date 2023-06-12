import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

export default function AppButton({ text }) {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>{text} </AppText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
  },
});
