import React, { useEffect, useState } from "react"
import {StyleSheet, Text, View, Image, Button, Icon} from "react-native"
import Card from "./card"

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Item(element, navigation) {

     const handleButton = () => {
        navigation.navigate("ProductDetail", {element}) //pasar parametros a rutas
      }

      const [favorite, SetFavorite] = useState(false);

      useEffect(() => {
       
        console.log(favorite)

      }, []);

    return(
        <Card style={style.card}>
                <Image style={{ width: 280, height: 250 }} source={{uri: element.imagen}}/> 
                <Text>{element.nombre}</Text>
                <View style={style.button}>
                    <Button onPress={handleButton} title="See more"></Button>  
                    <Ionicons onPress={()=>{SetFavorite(!favorite)}} name= {favorite ?  "ios-heart" : "heart-outline" } size={28}/>
                    
                </View>
        </Card>
    )
}

const style = StyleSheet.create({
    card: {
        width: 350,
        height: 450,
        
      },
      button: {
        flexDirection: "row",
        justifyContent: "space-evenly"
      }
})