import React from 'react'
import { View, TextInput} from "react-native"

function index({setEnteredFilter}) {
  return (
        <TextInput style={{
             height: 50,
             marginHorizontal: '5%',
             marginTop: '7%',
             borderWidth:1,
             borderColor:'#211F30',
             borderRadius:20,
             color: 'white',
             padding: 15,
             backgroundColor: '#211F30',
        }}
        placeholder = "Find.."
        placeholderTextColor={"rgba(255,255,255, 0.6)"}
        onChangeText={text => setEnteredFilter(text)}

        />
  )
}

export default index