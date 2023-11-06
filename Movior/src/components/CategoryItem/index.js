import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DiscoveryItem from "../DiscoveryItem";
import axios from "axios";
import SearchBar from "../../components/SearchBar"
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "d0db8f3e22e7317943ec9cd6fad83b1d";
const menu = [
  {
    categoryName: "Movies",
    id: "1",
    path: "movie",
  },
  {
    categoryName: "Tv Series",
    id: "2",
    path: "tv",
  },
];

const Item = ({ categoryName, selected, onPress }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      marginRight: 30,
      marginHorizontal: 4,
      borderBottomWidth: selected ? 2 : 0,
      borderBottomColor: "#FF8F71",
    }}
    onPress={onPress}
  >
    <Text
      style={{
        fontSize: 16,
        fontWeight: "400",
        color: selected ? "#FF8F71" : "white",
      }}
    >
      {categoryName}
    </Text>
  </TouchableOpacity>
);
function index() {
  const [data, setData] = useState([]);
  const [path, setPath] = useState("movie");
// const [enteredFilter,setEnteredFilter] =useState('')
//   const filteredItem = data?.filter(item=>alp==='movie' ? item.title.trim().toLowerCase().includes(enteredFilter):item.name?.toLowerCase()?.includes(enteredFilter)) //
//  console.log(filteredItem,'alp',enteredFilter)

  useEffect(() => {
    getDiscovery(path);
  }, [path]);
  const getDiscovery = async (path) => {
    try {
      await axios
        .get(
          `${API_URL}/discover/${path}?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then((res) => setData(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedId, setSelectedId] = useState(menu[0].id);

  const renderItem = ({ item }) => (
    <Item
      categoryName={item.categoryName}
      selected={item.id === selectedId}
      onPress={() => {
        setSelectedId(item.id);
        setPath(item.path);
      }}
    />
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchBar setEnteredFilter={setEnteredFilter}/>
      <View
        style={{
          height: 50,
          marginHorizontal: "5%",
          marginTop: "4%",
          width: "100%",
        }}
      >
        <FlatList
          data={menu}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={true}
        />
      </View>
      <DiscoveryItem data={data} filteredItem={filteredItem} alp={alp} />
    </ScrollView>
  );
}

export default index;
