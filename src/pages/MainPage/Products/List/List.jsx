import { ProductsItem } from "./Item/Item";

import style from "../Products.module.scss";

import { useState, useEffect } from "react";

import products from "../../../../products";

export const ProductsList = () => {
  // Сохраняем избранные товары из localStorage
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("activeProducts")) || [];
  });

  // Проверка, лайкнут ли товар
  const isFavorite = (productId) => {
    return favoriteProducts.some((item) => item.id === productId);
  };

  // Добавление/удаление товара из избранного
  function toggleFavorite(productId) {
    let updatedFavorites;
    if (isFavorite(productId)) {
      updatedFavorites = favoriteProducts.filter((item) => item.id !== productId);
    } else {
      const productToAdd = products.find((item) => item.id === productId);
      if (!productToAdd) return;
      updatedFavorites = [...favoriteProducts, productToAdd];
    }
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem("activeProducts", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('storage'));
  }

  // Слушаем изменения localStorage (например, если лайкнули в другой вкладке)
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "activeProducts") {
        const newFavorites = JSON.parse(event.newValue) || [];
        setFavoriteProducts(newFavorites);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <ul className={style.products__list}>
      {products.map((item) => (
        <ProductsItem
          id={item.id}
          key={item.id}
          src={item.image.src}
          mobileImage={item.image.srcSet.mobile}
          desktopImage={item.image.srcSet.desktop}
          alt={item.image.alt}
          size={item.size}
          mobileTitle={item.title.mobileTitle}
          desktopTitle={item.title.desktopTitle}
          inStock={item.inStock}
          oldPrice={item.oldPrice}
          currentPrice={item.price}
          onSelect={toggleFavorite}
          isFavorite={isFavorite(item.id)}
        />
      ))}
    </ul>
  );
};
