import { View, StyleSheet, Text, FlatList } from 'react-native';

//**************Components**************/
import Item from '../components/item';


import { useSelector } from 'react-redux';

export default function FavoriteProducts({navigation}) {

    
    const favoriteList= useSelector(state => state.favorites.favorites)

    function renderFavorites({item}) {
      return(
        <Item element={item} navigation={navigation}/> 
       )
      }

    

    return(
        <View style={style.products}> 
        {console.log(favoriteList)}
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

