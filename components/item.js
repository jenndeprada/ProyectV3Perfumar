import React, { useEffect, useState } from "react"
import {StyleSheet, Text, View, Image, Button, Icon} from "react-native"
import Card from "./card"
import { NavigationContainer } from '@react-navigation/native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from "react-native-vector-icons/Ionicons";
import { addFavAction } from "../store/actions/addFavorite.action";

export default function Item({element, navigation}) {

     const handleButton = () => {
        navigation.navigate("ProductDetail", {element}) //pasar parametros a rutas
      }

      const [favorite, SetFavorite] = useState(false);

      const handleFavorite = () => {
        return SetFavorite(!favorite) 
      }

      const dispatch = useDispatch()

      useEffect(()=>{
        dispatch(addFavAction(element))
  
      }, [favorite === true])

  

    return(
        <Card style={style.card}>
                <Image style={{ width: 300, height: 300 }} source={{uri: element.imagen}}/> 
                <Text style={style.perfumeName}>{element.nombre}</Text>
                <View style={style.buttons}>
                    <Button onPress={handleButton} title="See more"></Button>  
                    <Ionicons name= {favorite ?  "ios-heart" : "heart-outline" } size={28}  onPress={handleFavorite} size={35}></Ionicons> 
                </View>
        </Card>
    )
}

const style = StyleSheet.create({
    card: {
        width: 350,
        height: 450,
        justifyContent: "space-between"
        
      },
      buttons: {
        flexDirection: "row",
        margin: 30,
        justifyContent: "space-between"
      },
      perfumeName: {
        padding: 5,
        fontSize: 22,
        fontWeight: "400"
      }
})