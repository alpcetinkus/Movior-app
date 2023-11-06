import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w342";
const { width, height } = Dimensions.get("window");

function index({ data, alp,filteredItem }) {
  return (
    <View
      style={styles.view}
    >
      {(filteredItem.length >1 ? filteredItem:data)?.map((item) => (
        <TouchableOpacity style={{ marginVertical: 10 }} activeOpacity={0.7}>
          <Image
            style={styles.image}
            source={{ uri: IMAGE_URL + item.poster_path }}
          />
          <Text style={styles.text}>
            {alp === "tv" ? item.name : item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default index;

const styles = {
  view:{
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginLeft: "4%",
  },
  image: {
    width: width * 0.4,
    height: width * 0.6,
    borderRadius: 16,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 12,
    marginVertical: 3,
    width: width * 0.4,
  },
};
