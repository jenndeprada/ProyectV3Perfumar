//***SETUP REDUCER**** */
import { createStore, combineReducers } from "redux";

//********Import reducers to be used ********* */
import FavoriteReducer from "./reducers/FavoriteReducer";

const RootReducer = combineReducers({
    favorites: FavoriteReducer,
})

export default createStore(RootReducer)