import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import basketReducer from "./basket/basketSlice"
import basketListReducer from "./basket/basketListSlice"
import { favoriteReducer } from "./favorite/FavoriteSlice";
import loginReducer from "./login/loginSlice";
import { productsReducer } from "./products/ProductsSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";

const favoriteConfig = {
  key: "favorite",
  storage,
};
const productsConfig = {
  key: "products",
  storage,
};
const persistedFavorite = persistReducer(favoriteConfig, favoriteReducer);
const persistedProducts = persistReducer(productsConfig,productsReducer)
const rootReducer = combineReducers({
  basket: basketReducer,
  basketList:basketListReducer,
  favorite: persistedFavorite,
  login: loginReducer,
  products: persistedProducts,
  reviews: reviewsReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
