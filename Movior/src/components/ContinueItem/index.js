import React from 'react'
import {View, Image,Text} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 


function index() {
  return (
    <View style={{alignItems:'center',marginVertical:28}}>
            <Image style={{width:'90%', borderRadius:30, borderWidth:2,borderColor:'white'}}source={require("../../../assets/ornek3.jpeg")}/>
            {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:"gray", padding:10,borderRadius:16}}>     
                <AntDesign name="play" size={24} color="#FF8F71" />
                <View style={{marginLeft:20}}>
                <Text style={{color:'#9c9a9a',fontSize:11, fontWeight:'300'}}>Continue Watching</Text>
                <Text style={{color:'white',fontWeight:'600'}}>Meg 2</Text>
                </View>
            </View> */}
    </View>
  )
}

export default index