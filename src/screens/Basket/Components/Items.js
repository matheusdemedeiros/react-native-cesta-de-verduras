import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../../../components/AppText";

export default function Items({ title, list }) {
  return (
    <>
      <AppText style={styles.title}>{title}</AppText>
      {list.map(({ name, image }) => {
        return (
          <View style={styles.item} key={name}>
            <Image style={styles.image} source={image}></Image>
            <AppText style={styles.name}>{name}</AppText>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
