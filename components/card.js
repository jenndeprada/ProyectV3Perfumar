import React from "react"
import {StyleSheet, View} from "react-native"



export default function Card(props) {
    return(
        <View style={{...props.style, ...style.container}}>
           {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        shadowRadius: 6,
        elevation: 5,
        shadowColor: "#000",
        marginTop:20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        borderColor: "gray",
        alignItems: "center",
        
    },
    
})