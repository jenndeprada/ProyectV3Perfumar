import { ADD_FAV, DELETE_FAV } from "../actions/addFavorite.action"


const initialState = {
    favorites: [],
    
}

const FavoriteReducer = (state=initialState, action) => {
    const isInFavs = state.favorites.find(fav => fav == action.payload) 
    switch(action.type) {
        case ADD_FAV:
            return isInFavs ? {...state} : {...state, favorites: [...state.favorites, action.payload]}

        case DELETE_FAV: 
            const favListFiltered  = state.favorites.filter(fav => fav !== action.payload)
            return isInFavs ? {...state, favorites: favListFiltered} : {...state}
              
        default:
            return {...state}    
    }
}

export default FavoriteReducer





