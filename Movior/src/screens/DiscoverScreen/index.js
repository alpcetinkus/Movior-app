import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, SafeAreaView, Dimensions} from "react-native"

import CategoryItem from "../../components/CategoryItem"
const {width,height} = Dimensions.get('window')

function index() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#15141F'}}>
    <ScrollView>
        <Text style={{color: 'white', fontSize:35, fontWeight:'300', marginLeft: width*0.05, marginTop: width*0.05 }}>Find Movies, Tv series,{"\n"}and more..</Text>
        
        <CategoryItem />
    </ScrollView>
    </SafeAreaView>
  )
}

export default index