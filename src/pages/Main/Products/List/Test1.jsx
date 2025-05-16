import { ProductsItem } from "./Item/Item";
import style from "../Products.module.scss";
import MobileSpartaBed1x from "../../../../images/main/mobile/1x/sparta-bed@1x.webp";
import MobileSpartaBed2x from "../../../../images/main/mobile/2x/sparta-bed@2x.webp";

import DesktopSpartaBed1x from "../../../../images/main/desktop/1x/sparta-bed@1x.webp";
import DesktopSpartaBed2x from "../../../../images/main/desktop/2x/sparta-bed@2x.webp";

import DesktopArgonBed1x from "../../../../images/main/desktop/1x/argon-bed@1x.webp";
import DesktopArgonBed2x from "../../../../images/main/desktop/2x/argon-bed@2x.webp";

import DesktopPrestigeBed1x from "../../../../images/main/desktop/1x/prestige-bed@1x.webp";
import DesktopPrestigeBed2x from "../../../../images/main/desktop/2x/prestige-bed@2x.webp";

import DesktopTokioSofa1x from "../../../../images/main/desktop/1x/tokio-sofa@1x.webp";
import DesktopTokioSofa2x from "../../../../images/main/desktop/2x/tokio-sofa@2x.webp";

import DesktopLargoMatress1x from "../../../../images/main/desktop/1x/largo-matress@1x.webp";
import DesktopLargoMatress2x from "../../../../images/main/desktop/2x/largo-matress@2x.webp";

import DesktopArgentumMatress1x from "../../../../images/main/desktop/1x/argentum-matress@1x.webp";
import DesktopArgentumMatress2x from "../../../../images/main/desktop/2x/argentum-matress@2x.webp";

import DesktopBravoSofa1x from "../../../../images/main/desktop/1x/bravo-sofa@1x.webp";
import DesktopBravoSofa2x from "../../../../images/main/desktop/2x/bravo-sofa@2x.webp";

import DesktopMK5Bed1x from "../../../../images/main/desktop/1x/mk5-bed@1x.webp";
import DesktopMK5Bed2x from "../../../../images/main/desktop/2x/mk5-bed@2x.webp";

import { useState, useEffect } from "react";

export const Check = () => {

  let products = JSON.parse(localStorage.getItem('activeProducts'));

  const buttons = [...document.querySelectorAll('.' + style.products__button)].filter((item, index) => index % 2 !== 1);
  
  buttons.forEach(item => {

    item.addEventListener('click', () => {

      products = JSON.parse(localStorage.getItem('activeProducts'));
      
    })
  })
  

  useEffect(() => {

    products = JSON.parse(localStorage.getItem('activeProducts'));
    console.log('products checked' + products);
    
  }, [products]);

  //   return (
  //     <>
  //       {/* {products.map(item => {

  //         console.log(item);
          
          
  //         // <ProductsItem
  //         //   id={item.id}
  //         //   key={item.id}
  //         //   src={item.image.src}
  //         //   mobileImage={item.image.srcSet.mobile}
  //         //   desktopImage={item.image.srcSet.desktop}
  //         //   alt={item.image.alt}
  //         //   size={item.size}
  //         //   mobileTitle={item.title.mobileTitle}
  //         //   desktopTitle={item.title.desktopTitle}
  //         //   inStock={item.inStock}
  //         //   oldPrice={item.price.oldPrice}
  //         //   currentPrice={item.price.currentPrice}
  //         // />
  //       })} */}
  //     </>
  //   )
  // } else {  

  //   return (

  //     <h3>empty</h3>
  //   );
  // };   
};