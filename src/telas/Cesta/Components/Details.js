import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../../../components/Text";

export default function Details({
  basketName,
  basketDescription,
  basketPrice,
  farmLogo,
  farmName,
}) {
  return (
    <>
      <AppText style={styles.basketName}>{basketName}</AppText>

      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmImage} />
        <AppText style={styles.farmName}>{farmName}</AppText>
      </View>

      <AppText style={styles.basketDescription}>{basketDescription}</AppText>

      <AppText style={styles.basketPrice}>{basketPrice}</AppText>
    </>
  );
}

const styles = StyleSheet.create({
  basketName: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  basketDescription: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  basketPrice: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
