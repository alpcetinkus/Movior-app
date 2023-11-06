import React, {useState, useEffect}from 'react'
import { Dimensions, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from "axios"
import { useNavigation } from '@react-navigation/native';


const {width:screenWidth,height} = Dimensions.get('window')
const sliderWidth =screenWidth;
const itemWidth = screenWidth * 0.5;

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0db8f3e22e7317943ec9cd6fad83b1d';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';



function index() {
    const [data,setData] = useState([])
    useEffect(() => {getTrendingMovies()},[])

    const getTrendingMovies = async () => {
        try{
          await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`)
          .then(res => setData(res.data.results))
        } catch(error) {
          console.log(error)
        }
    }
    const navigation = useNavigation();

    const renderItem =({item}) => (
        <TouchableOpacity style={styles.itemContainer}
        
        >
            <Image style={styles.itemImg}source={{uri: IMAGE_URL + item.poster_path}}/>
        </TouchableOpacity>
    )
  return (
    <Carousel 
    layout='default'
    data={data}
    renderItem={renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    firstItem={1}
   
    />
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 25,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems:'center',
        justifyContent:'center',
        height: height * 0.4
    }, 
    itemImg: {
        width: itemWidth,
        height: height*0.4,
        borderRadius: 16,
    }
})

export default index