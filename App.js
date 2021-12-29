import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//*****************Components******************* */
import Header from "./components/header"
import ProductsList from './screens/productList';
import ProductDetail from './screens/productDetail';
import { useState } from 'react';
import FavoriteProducts from './screens/favoriteProducts';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {

  const Stack = createNativeStackNavigator();
  const FavStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  function createStackRender(){
    return(
      <FavStack.Navigator>
        <FavStack.Screen name={"FavoriteProducts"} component={FavoriteProducts}/>
      </FavStack.Navigator>
    )
  }


  function createMainRender(){
    return(
      <Stack.Navigator initialRouteName="ProductsList">
          <Stack.Screen name="ProductsList" component={ProductsList} options={{title: "Perfume List"}}/> 
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{title: "Perfume name"}}/>   
      </Stack.Navigator>
    )
  }
  


  
  return (
    
    <NavigationContainer>
       <SafeAreaView style={style.safeZone}>
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name={"Products"} component={createMainRender} options={{tabBarIcon: ({focused}) => (
                  <View>
                    <Ionicons color={focused? "pink" : "black" } name= {"ios-home"} size={28}/>
                  </View>
                )}}
              />
              <Tab.Screen name={"Favorites"} component={createStackRender} 
                options={{tabBarIcon: ({focused}) => (
                  <View>
                    <Ionicons color={focused? "pink" : "black" } name= {"ios-heart"} size={28}/>
                  </View>
                )}}
              />
            </Tab.Navigator>
        </SafeAreaView>
    </NavigationContainer>
  );
}




const style = StyleSheet.create({
  safeZone: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8edeb",
  },
  
});
