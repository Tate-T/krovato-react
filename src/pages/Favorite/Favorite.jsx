
import { useState, useEffect } from "react";
import { FavoriteItem } from "./FavoriteItem";

import styleFavorite from './Favorite.module.scss'
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
const Favorite = () => {

  const [products, setProducts] = useState(() => {

    return JSON.parse(localStorage.getItem("activeProducts"));
  });
  

  const updateProducts = () => {
    const newProducts = JSON.parse(localStorage.getItem("activeProducts"));
    setProducts(newProducts);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentProducts = JSON.parse(localStorage.getItem("activeProducts")) || [];
      setProducts(prev => {
        const prevString = JSON.stringify(prev);
        const currentString = JSON.stringify(currentProducts);
        if (prevString !== currentString) {
          return currentProducts;
        }
        return prev;
      });
    }, 500);
  
    return () => clearInterval(interval);
  }, []);

  return(
    <>
    {/* <Header/> */} {/* зимчасово закоментував,ррозкоментую коли появляться сторінки*/}
    <ul className={styleFavorite.Favorite}>
    
    {products.map((item)=>{
      return(
        <FavoriteItem Favorite={item}/>
      )
    })}
  </ul>
  {/* <Footer/> */} {/* зимчасово закоментував,ррозкоментую коли появляться сторінки*/} 
    </>
  );
};
export default Favorite
