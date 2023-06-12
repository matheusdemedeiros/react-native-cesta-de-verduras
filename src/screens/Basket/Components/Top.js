import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import AppText from "../../../components/Text";
import topo from "../../../../assets/topo.png";

export default function Top({ title }) {
  return (
    <>
      <Image source={topo} style={styles.top} />
      <AppText style={styles.title}>{title}</AppText>
    </>
  );
}

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * screenWidth,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
