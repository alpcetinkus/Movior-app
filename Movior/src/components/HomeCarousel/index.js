import React from 'react'
import { Dimensions, StyleSheet, Image, View } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const {width:screenWidth,height} = Dimensions.get('window')
const sliderWidth =screenWidth;
const itemWidth = screenWidth * 0.5;

const data = [
    {
       imgUrl: "https://image.tmdb.org/t/p/w400/uldNFFKNXNvwss0MIZErMSFkBJZ.jpg"
    },
    {
        imgUrl: "https://image.tmdb.org/t/p/w400/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg"
    },
    {
        imgUrl: "https://image.tmdb.org/t/p/w400/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
     },
     {
        imgUrl: "https://image.tmdb.org/t/p/w400/6yx14lSACNJ2zRoYyXqecf3QNgr.jpg"
     },
     {
        imgUrl: "https://image.tmdb.org/t/p/w400/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
     },
     {
        imgUrl: "https://image.tmdb.org/t/p/w400/uldNFFKNXNvwss0MIZErMSFkBJZ.jpg"
     },
     {
        imgUrl: "https://image.tmdb.org/t/p/w400/uldNFFKNXNvwss0MIZErMSFkBJZ.jpg"
     },

];

const renderItem =({item}) => (
    <View style={styles.itemContainer}>
        <Image style={styles.itemImg}source={{uri:item.imgUrl}}/>
    </View>
)
function index() {
  return (
    <Carousel 
    layout='default'
    data={data}
    renderItem={renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    firstItem={1}
    loop={true}
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