// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import basketReducer from "./basket/basketSlice"
import basketListReducer from "./basket/basketListSlice"
import { favoriteReducer } from "./favorite/FavoriteSlice";
import loginReducer from "./login/loginSlice";
import { productsReducer } from "./products/ProductsSlice";
import cartSlice from "../redux/basketModal/basketModalSlice";
import { ProductItemReducer } from "./productItem/productItemSlice";
import productDescriptionReducer from "./productDescription/productDescriptionSlice";
const favoriteConfig = {
  key: "favorite",
  storage,
};
const productsConfig = {
  key: "products",
  storage,
};
const productItemConfig = {
  key: "ProductItem",
  storage
}

const persistedFavorite = persistReducer(favoriteConfig, favoriteReducer);
const persistedProducts = persistReducer(productsConfig,productsReducer)
const persistedProductsItem = persistReducer(productItemConfig,ProductItemReducer)
const rootReducer = combineReducers({
  basket: basketReducer,
  basketList:basketListReducer,
  favorite: persistedFavorite,
  login: loginReducer, // now works with useSelector
  products: persistedProducts, 
  cart: cartSlice,
  productDescription:productDescriptionReducer,
  itemProduct : persistedProductsItem
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
