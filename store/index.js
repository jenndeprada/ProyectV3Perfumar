//***SETUP REDUCER**** */
import { createStore, combineReducers, applyMiddleware } from "redux";

//********Import reducers to be used ********* */
import FavoriteReducer from "./reducers/FavoriteReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

// //Thunk para realizar llamadas asíncronas
import thunkMiddleware from "redux-thunk";

// //Dev tools para ver los states por consola


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


//Nuestro store generado con el RootReducer y nuestro enhancer compuesto con devtools y llamadas asíncronas

const RootReducer = combineReducers({
    favorites: FavoriteReducer,
})

export default createStore(RootReducer, composedEnhancer)