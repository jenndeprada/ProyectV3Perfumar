import React from "react"
import { StyleSheet, Text, Image, View } from "react-native"
//*************Components****************//
import Card from "../components/card"

export default function ProductDetail(product) {

    const productSelected = product.route.params.element;
    // console.log(productSelected.element) //devuelve un objeto pero sin params

    return(
        <View style={{flex:11, alignItems:"center",  backgroundColor: "#f8edeb"}}>
            <Card style={style.card}>
                <View style={{alignItems: "center", marginTop: 30}}>
                    <Text style={{fontSize: 25, fontWeight:"200"}}>{productSelected.nombre}</Text>
                    <Image style={{ width: 300, height: 250 }} source={{uri: productSelected.imagen}}/>
                </View>

                <View style={style.details}>
                    <Text style={style.text}>Marca:  {productSelected.marca}</Text>
                    <Text style={style.text}>Tipo:  {productSelected.tipo}</Text>
                    <Text style={style.text}>Sexo:  {productSelected.categoria}</Text>
                    <Text style={style.text}>Perfumista:  {productSelected.marca}</Text>
                    <Text style={style.text}>Precio:  $ {productSelected.precio}</Text>
                    <Text style={style.text}>Producto Nº:  {productSelected.id}</Text>
                </View>
            </Card>
        </View>
        
    )
} 

const style = StyleSheet.create({
    card: {
        flex: 1,
        width: 380,
        marginBottom: 20,
        
    },
    details: {
        width: 300,
        height: 200,
        marginTop: 50,
        
    },
    text: {
        fontSize: 18,
        fontWeight: "200"
    }
})