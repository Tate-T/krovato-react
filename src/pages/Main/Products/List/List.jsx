import { ProductsItem } from "./Item/Item";

import style from "../Products.module.scss";

import { useState, useEffect } from "react";

import products from '../../../../products';
console.log(products);


export const ProductsList = () => {

  const [product, setProduct] = useState([]);

  function activeProducts (productId) {

    setProduct(prev => [...prev, products.find(item => item.id === productId)]);
  };

  useEffect(() => {

    localStorage.setItem('activeProducts', JSON.stringify(product));
    console.log('localStorage updated');
    
  }, [product]);

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
          oldPrice={item.price.oldPrice}
          currentPrice={item.price.currentPrice}
          onSelect={activeProducts}
        />
      ))}
    </ul>
  );
};
