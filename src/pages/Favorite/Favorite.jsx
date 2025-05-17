import styleProduct from "../Main/Products/Products.module.scss";

import { useState, useEffect } from "react";
import { FavoriteItem } from "./FavoriteItem";

import styleFavorite from './Favorite.module.scss'
const Favorite = () => {
  let products = JSON.parse(localStorage.getItem("activeProducts"));
  
  const buttons = [
    ...document.querySelectorAll("." + styleProduct.products__button),
  ].filter((item, index) => index % 2 !== 1);
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      products = JSON.parse(localStorage.getItem("activeProducts"));
    });
  });
  
  useEffect(() => {
    console.log("products checked" + products);
  }, [products]);
  return(
    <li className={styleFavorite.Favorite}>
    
    {products.map((item)=>{
      return(
        <FavoriteItem Favorite={item}/>
      )
    })}
  </li>
  );
};
export default Favorite