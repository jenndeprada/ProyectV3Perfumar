import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Item from '../components/item';

//**************Components**************/
import Card from "./../components/card"
import {products} from "./../data/products"

export default function FavoriteProducts({navigation}) {

    //usar un use effect o ***redux***


    return(
        <View style={style.products}> 
          <ScrollView style={{flex: 1}}>
              <Text>Render favorite products</Text>
          </ScrollView>
        </View>
    )
}



const style = StyleSheet.create({
      products: {
        flex: 11,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8edeb"
      },

})

