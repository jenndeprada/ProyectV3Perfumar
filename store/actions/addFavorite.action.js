export const ADD_FAV = "ADD_FAVORITE"
export const DELETE_FAV = "DELETE_FAV"

export function addFavAction(productSelected) { //la accion toma un producto a agregar a favoritos

    return {
        type: ADD_FAV,
        payload: productSelected,
    }
    

}

export function deleteFromFavs(productSelected) {

    return {
        type: DELETE_FAV,
        payload: productSelected
    }
}
