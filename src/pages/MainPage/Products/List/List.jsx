import { ProductsItem } from "./Item/Item";

import style from "../Products.module.scss";

import {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import productsThunk from "../../../../thunk/ProductsThunk";
import { addFavoriteProductThunk } from "../../../../thunk/addFavoriteProductThunk";
import { getFavoriteThunk } from "../../../../thunk/getFivoriteThunk";
export const ProductsList = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const favoriteProducts = useSelector( state => state.favorite.favoriteProducts)

  const isFavorite = (productTitle) => {
   if (!Array.isArray(favoriteProducts)) return false;
    return favoriteProducts.some((item) => item.title === productTitle);
    };
  // Добавление/удаление товара из избранного
  function toggleFavorite({id,title, alt, size, inStock, price, src, oldPrice,}) {
    console.log(price)
    const alreadyFavorite = isFavorite(title);
    if (alreadyFavorite) {
      alert("Товар вже додано. Щоб видалити зайдіть в ваш список")
      return
    } else {
      console.log("Додаємо в улюблені:", title);
      return dispatch(addFavoriteProductThunk({ id, title, alt, size, inStock, price, imageSrc: src, oldPrice }));
    }
  }
  
  useEffect(() => {
    dispatch(productsThunk())
    dispatch(getFavoriteThunk())
  },[])
  return (
    <ul className={style.products__list}>
      {products.map((item) => (
         <ProductsItem
          id={item.id}
          key={item.id}
          src={item.imageSrc}
          alt={item.alt}
          size={item.size}
          title={item.title}
          inStock={item.inStock}
          oldPrice={item.oldPrice}
          currentPrice={item.price}
          onSelect={toggleFavorite}
          isFavorite={isFavorite(item.title)}
         />
      ))}
    </ul>
  );
};
