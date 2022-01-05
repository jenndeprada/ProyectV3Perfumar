import React, { useEffect, useState } from "react"
import {StyleSheet, Text, View, Image, Button} from "react-native"
import Card from "./card"
import { useDispatch } from 'react-redux';
import Ionicons from "react-native-vector-icons/Ionicons";
import { addFavAction, deleteFromFavs } from "../store/actions/addFavorite.action";


export default function Item({element, navigation}) {

      useEffect(() => {
            
      }, [favorite]);



     function handleButton() {
        navigation.navigate("ProductDetail", {element}) //pasar parametros a rutas
      }

      const [favorite, SetFavorite] = useState(false);

      const dispatch = useDispatch()

      const handleFavorite = () => {
        if (favorite) {
          dispatch(deleteFromFavs(element))
          
        } else {
          dispatch(addFavAction(element))
          
        }
        SetFavorite(!favorite)
        
      }

     

    return(
       
        <Card style={style.card}>
          <Ionicons style={style.icon} name= {favorite ?  "ios-heart" : "heart-outline" } size={35} onPress={()=> handleFavorite()}></Ionicons> 
          <View>
                <Image style={{ width: 300, height: 300 }} source={{uri: element.imagen}}/> 
                <Text style={style.perfumeName}>{element.nombre} by {element.marca}</Text>
          </View>
     
          <View style={style.buttons}>
              <Button  onPress={()=> handleButton()} title="See more"></Button>  
          </View>
        </Card>
        
        
    )
}

const style = StyleSheet.create({
    card: {
        width: 350,
        height: 450,
        justifyContent: "space-around"
      },
      buttons: {
        flexDirection: "row",
        margin: 15
      },
      perfumeName: {
        padding: 20,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "400"
      },
      icon: {
        alignSelf: "flex-end",
        margin: 8
      }
})