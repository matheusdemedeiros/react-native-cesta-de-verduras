import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import Top from "./Components/Top";
import logo from "../../../assets/logo.png";

import AppText from "../../components/Text";

export default function Cesta() {
  return (
    <>
      <Top />
      
      <View style={styles.basket}>
        <AppText style={styles.basketName}>Cesta de verduras</AppText>

        <View style={styles.farm}>
          <Image source={logo} style={styles.farmImage} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>

        <AppText style={styles.basketDescription}>
          Uma cesta com produtos selecionados cuidadosamente direto da fazenda
          para a sua cozinha!
        </AppText>
        <AppText style={styles.basketPrice}>R$ 40,00</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
