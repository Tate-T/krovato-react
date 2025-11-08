// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import basketReducer from "./basket/basketSlice"
import basketListReducer from "./basket/basketListSlice"
import { favoriteReducer } from "./favorite/FavoriteSlice";
import loginReducer from "./login/loginSlice";

const favoriteConfig = {
  key: "favorite",
  storage,
};

const persistedFavorite = persistReducer(favoriteConfig, favoriteReducer);

const rootReducer = combineReducers({
  basket: basketReducer,
  basketList:basketListReducer,
  favorite: persistedFavorite,
  login: loginReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
