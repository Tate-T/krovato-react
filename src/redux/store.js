import { createStore } from "redux";
import reducerBasket from "./basket/reducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { favoriteReducer } from "./favorite/FavoriteSlice";
import { combineReducers } from "redux";
import persistStore from "redux-persist/es/persistStore";
const configFavorite = {
  key: "favorite",
  storage,
};
const persistedFavoriteReducer = persistReducer(
  configFavorite,
  favoriteReducer
);

const rootReducer = combineReducers({
  basket: reducerBasket,
  favorite: persistedFavoriteReducer,
});
const store = createStore(rootReducer);
export const persistor = persistStore(store);

export default store;
