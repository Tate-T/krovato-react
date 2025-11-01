// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import reducerBasket from "./basket/reducer"; 
import { favoriteReducer } from "./favorite/FavoriteSlice";
import loginReducer from "./login/loginSlice";

const favoriteConfig = {
  key: "favorite",
  storage,
};

const persistedFavorite = persistReducer(favoriteConfig, favoriteReducer);

const rootReducer = combineReducers({
  basket: reducerBasket,
  favorite: persistedFavorite,
  login: loginReducer, // now works with useSelector
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;