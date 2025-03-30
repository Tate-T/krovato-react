import { ProductsItem } from "./Item/Item";

import style from "../Products.module.scss";

export const ProductsList = () => {
  const items = [
    {
      id: "product-1",
      image: {
        src: "./images/mobile/sparta-bed@1x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/sparta-bed@1x.webp 1x, ./images/desktop/sparta-bed@2x.webp 2x",
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
        src: "./images/mobile/sparta-bed@1x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/argon-bed@1x.webp 1x, ./images/desktop/argon-bed@2x.webp 2x",
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
        src: "./images/mobile/prestige-bed@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/prestige-bed@1x.webp 1x, ./images/desktop/prestige-bed@2x.webp 2x",
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
        src: "./images/mobile/tokio-sofa@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/tokio-sofa@1x.webp 1x, ./images/desktop/tokio-sofa@2x.webp 2x",
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
        src: "./images/mobile/largo-matress@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/largo-matress@1x.webp 1x, ./images/desktop/largo-matress@2x.webp 2x",
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
        src: "./images/mobile/argentum-matress@1x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/argentum-matress@1x.webp 1x, ./images/desktop/argentum-matress@2x.webp 2x",
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
        src: "./images/mobile/bravo-sofa@1x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/bravo-sofa@1x.webp 1x, ./images/desktop/bravo-sofa@2x.webp 2x",
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
        src: "./images/mobile/mk5-bed@1x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sparta-bed@1x.webp 1x, ./images/mobile/sparta-bed@2x.webp 2x",
          desktop:
            "./images/desktop/mk5-bed@1x.webp 1x, ./images/desktop/mk5-bed@2x.webp 2x",
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

  return (
    <ul className={style.products__list}>
      {items.map((item) => (
        <ProductsItem
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
        />
      ))}
    </ul>
  );
};
