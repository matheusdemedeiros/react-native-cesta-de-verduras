import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../../../components/Text";
import logo from "../../../../assets/logo.png";

export default function Details() {
  return (
    <>
      <AppText style={styles.basketName}>Cesta de verduras</AppText>

      <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage} />
        <AppText style={styles.farmName}>Jenny Jack Farm</AppText>
      </View>

      <AppText style={styles.basketDescription}>
        Uma cesta com produtos selecionados cuidadosamente direto da fazenda
        para a sua cozinha!
      </AppText>
      
      <AppText style={styles.basketPrice}>R$ 40,00</AppText>
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
