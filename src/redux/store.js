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
import { AdditionAPIReducer } from "./Addition/AdditionSlice";
import { recommendedProductReducer } from "./recomme/recommendedSlice";
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
const AdditionConfig = {
  key: "Addition",
  storage
}

const recommendedProductConfig = {
  key: "recommendedProduct",
  storage
}

const persistedFavorite = persistReducer(favoriteConfig, favoriteReducer);
const persistedProducts = persistReducer(productsConfig,productsReducer)
const persistedProductsItem = persistReducer(productItemConfig,ProductItemReducer)
const persistedAddition = persistReducer(AdditionConfig,AdditionAPIReducer)
const persistedRecommended = persistReducer(recommendedProductConfig,recommendedProductReducer)
const rootReducer = combineReducers({
  basket: basketReducer,
  basketList:basketListReducer,
  favorite: persistedFavorite,
  login: loginReducer, // now works with useSelector
  products: persistedProducts, 
  cart: cartSlice,
  itemProduct : persistedProductsItem,
  addition : persistedAddition,
  reccomendetion: persistedRecommended,
  productDescription:productDescriptionReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
