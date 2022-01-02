import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Item from '../components/item';

//**************Components**************/
import Card from "./../components/card"
import {products} from "./../data/products"

import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteProducts({navigation}) {

    
    const favoriteList= useSelector(state => state.favorites.favorites)

    function renderFavorites({item}) {
      return(
        <Item element={item} navigation={navigation}/> 
       )
      }

    

    return(
        <View style={style.products}> 
          <FlatList data={favoriteList} keyExtractor={(product) => product.id.toString()} renderItem={renderFavorites} style={{flex: 1}}>
             
          </FlatList>
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

