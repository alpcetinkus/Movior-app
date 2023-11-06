import React, { useEffect, useState } from 'react'
import {View, Image,Text, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios"
import { useNavigation } from '@react-navigation/native';


const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0db8f3e22e7317943ec9cd6fad83b1d';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';


function index() {
  const [data,setData] = useState([])
  useEffect(() => {getPopularMovies()},[])
  const getPopularMovies = async () => {
      try{
        await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => setData(res.data.results))
      } catch(error) {
        console.log(error)
      }
  }
  console.log(data)

  return (
    <View style={{alignItems:'center',marginVertical:28}}>
      {
        data.map((item) => (
          <View>
            {/* <Text>{item.title}</Text>
            <Image
              source={{
                uri: IMAGE_URL + item.poster_path,
              }}
              style={{ width: 200,height: 200, borderRadius: 10 }}
            /> */}
          </View>

        ))
      }
            <Image style={{width:'90%', borderRadius:30,borderColor:'white'}}source={require("../../../assets/ornek3.jpeg")}/>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:"rgba(211,211,211,0.4)", padding:10,borderRadius:16,position:'absolute',left:40,top:140,borderWidth:0.3,borderColor:'white'}}>     
                <AntDesign name="play" size={24} color="#FF8F71" />
                <View style={{marginLeft:20}}>
                <Text style={{color:'gray',fontSize:11, fontWeight:'500'}}>Continue Watching</Text>
                <Text style={{color:'white',fontWeight:'600'}}>Meg 2</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

export default index