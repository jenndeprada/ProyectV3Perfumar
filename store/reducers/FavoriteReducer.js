import { ADD_FAV } from "../actions/addFavorite.action"


const initialState = {
    favorites: [],
    favSelected: null
}

const FavoriteReducer = ( state=initialState, action) => {
    console.log(state, "initial")
    switch(action.type) {
        case ADD_FAV:
            const isInFavs = state.favorites.find(fav => fav === action.payload) 
            return isInFavs ? {...state} : {...state, favorites: [...state.favorites, action.payload]}
        default:
            return {...state}    
    }
}

console.log(initialState.favorites, "state")
export default FavoriteReducer





