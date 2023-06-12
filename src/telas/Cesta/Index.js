import React from "react";
import { StyleSheet, View } from "react-native";
import Top from "./Components/Top";
import Details from "./Components/Details";

export default function Cesta({ top, details }) {
  return (
    <>
      <Top {...top} />

      <View style={styles.basket}>
        <Details {...details} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
