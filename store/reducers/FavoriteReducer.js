import { ADD_FAV } from "../actions/addFavorite.action"


const initialState = {
    favorites: [],
    favSelected: null
}

const FavoriteReducer = ( state=initialState, action) => {
    console.log(initialState)
    switch(action.type) {
        case ADD_FAV:
            return {...(state.favorites), favorites: action.payload }
    }
    return state
}


export default FavoriteReducer





// //Thunk para realizar llamadas asíncronas
// import thunkMiddleware from "redux-thunk";

// //Dev tools para ver los states por consola
// import {composeWithDevTools} from 'redux-devtools-extension';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


//Nuestro store generado con el RootReducer y nuestro enhancer compuesto con devtools y llamadas asíncronas
//export default createStore(RootReducer, composedEnhancer);