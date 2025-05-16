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

export const ProductsList = () => {
  const items = [
    {
      id: "product-1",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopSpartaBed1x}, ${DesktopSpartaBed2x}`,
        },
        alt: "Ліжко Спарта",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
      },
      inStock: true,
      price: {
        oldPrice: "25 400 грн.",
        currentPrice: "15 400 грн.",
      },
    },
    {
      id: "product-2",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopArgonBed1x}, ${DesktopArgonBed2x}`,
        },
        alt: "Ліжко Аргон",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Ліжко Аргон з підйомним механізмом",
      },
      inStock: true,
      price: {
        oldPrice: null,
        currentPrice: "16 400 грн.",
      },
    },
    {
      id: "product-3",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopPrestigeBed1x}, ${DesktopPrestigeBed2x}`,
        },
        alt: "Ліжко Престиж",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Ліжко Престиж з підйомним механізмом",
      },
      inStock: true,
      price: {
        oldPrice: null,
        currentPrice: "14 969 грн.",
      },
    },
    {
      id: "product-4",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopTokioSofa1x}, ${DesktopTokioSofa2x}`,
        },
        alt: "Диван Токіо-2",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Диван Токіо-2",
      },
      inStock: true,
      price: {
        oldPrice: null,
        currentPrice: "13 211 грн.",
      },
    },
    {
      id: "product-5",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopLargoMatress1x}, ${DesktopLargoMatress2x}`,
        },
        alt: "Матрац",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Матрац Largo SLIM / Ларго Слім",
      },
      inStock: true,
      price: {
        oldPrice: "3 122 грн.",
        currentPrice: "2 810 грн.",
      },
    },
    {
      id: "product-6",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopArgentumMatress1x}, ${DesktopArgentumMatress2x}`,
        },
        alt: "Матрац ARGENTUM AMALTEA",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Матрац ARGENTUM AMALTEA / Аргентум Амалті",
      },
      inStock: true,
      price: {
        oldPrice: "5 966 грн.",
        currentPrice: "5 071 грн.",
      },
    },
    {
      id: "product-7",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopBravoSofa1x}, ${DesktopBravoSofa2x}`,
        },
        alt: "Диван Браво",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Диван Браво",
      },
      inStock: true,
      price: {
        oldPrice: null,
        currentPrice: "10 008 грн.",
      },
    },
    {
      id: "product-8",
      image: {
        src: `${MobileSpartaBed1x}`,
        srcSet: {
          mobile:
            `${MobileSpartaBed1x}, ${MobileSpartaBed2x}`,
          desktop:
            `${DesktopMK5Bed1x}, ${DesktopMK5Bed2x}`,
        },
        alt: "Ліжко МК-5",
      },
      size: "Розмір: 61 x 184 x 2130 мм",
      title: {
        mobileTitle: "Ліжко Спарта / Sparta з підйомним механізмом",
        desktopTitle: "Ліжко МК-5",
      },
      inStock: true,
      price: {
        oldPrice: null,
        currentPrice: "8 775 грн.",
      },
    },
  ];

  const [product, setProduct] = useState([]);

  function activeProducts (productId) {

    setProduct(prev => [...prev, items.find(item => item.id === productId)]);
  };

  useEffect(() => {

    localStorage.setItem('activeProducts', JSON.stringify(product));
    console.log('localStorage updated');
    
  }, [product]);

  return (
    <ul className={style.products__list}>
      {items.map((item) => (
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
