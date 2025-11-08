import basketReducer from "./basket/basketSlice"
import basketListReducer from "./basket/basketListSlice"
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from "./favorite/FavoriteSlice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
const configFavorite = {
  key: "favorite",
  storage,
};
const persistedFavoriteReducer = persistReducer(
  configFavorite,
  favoriteReducer
);

const rootReducer = combineReducers({
  basket: basketReducer,
  basketList:basketListReducer,
  favorite: persistedFavoriteReducer,
  login: loginReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
