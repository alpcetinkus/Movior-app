import React from 'react'
import {View, Text, Dimensions, ScrollView} from "react-native"
import ContinueItem from "../../components/ContinueItem"
import HomeCarousel from "../../components/HomeCarousel"

// const {width,height} = Dimensions.get('window')


function index() {
  return (
    <ScrollView style={{width:'100%',backgroundColor: '#15141F'}}>
        <Text style={{color:"#FF8F71",fontSize:24,marginTop:35,marginHorizontal:'5%'}}>Stream  <Text style={{color:"white"}}>Everywhere</Text></Text>
        <ContinueItem />
        <Text style={{color:'white', fontSize:18,fontWeight:'500', marginHorizontal:'5%',marginBottom:10}}>Trending</Text>
        <HomeCarousel />
    </ScrollView>
  )
}

export default index