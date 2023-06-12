import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Top from "./Components/Top";
import Details from "./Components/Details";
import Items from "./Components/Items";

export default function Basket({ top, details, items }) {
  return (
    <ScrollView>
      <Top {...top} />

      <View style={styles.basket}>
        <Details {...details} />
        <Items {...items}></Items>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
