import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Item from '../components/item';

//**************Components**************/
import Card from "./../components/card"
import {products} from "./../data/products"

export default function ProductsList({navigation}) {


    return(
        <View style={style.products}> 
          <ScrollView style={{flex: 1}}>

            { products.length !== 0
              ? products.map((element) =>  {return Item(element, navigation, element.id)})
              : <h3>Loading..</h3>
            }

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

