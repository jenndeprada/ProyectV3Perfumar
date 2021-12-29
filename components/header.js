import React from "react"
import {StyleSheet, Text, View} from "react-native"

export default function Header() {
    return(
        <View style={style.container}>
            <Text style={style.titulo}>P</Text>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",        
        justifyContent: "center",
    },
    titulo: {
        fontSize: 25,
        fontWeight: "400",
        color: "white",
        marginLeft: 10,
        
    }
})