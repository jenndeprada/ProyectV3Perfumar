export const ADD_FAV = "ADD_FAVORITE"

export function addFavAction(productSelected) { //la accion toma un producto a agregar a favoritos

    return {
        type: ADD_FAV,
        payload: productSelected,
    }
    

}