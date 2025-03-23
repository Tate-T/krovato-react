import { PromotionsItem } from "./Item/Item";

export const PromotionsList = () => {
  const items = [
    {
      image: {
        src: "./images/desktop/sale1@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sale1@1x.webp 1x, ./images/mobile/sale1@2x.webp 2x",
          desktop:
            "./images/desktop/sale1@1x.webp 1x, ./images/desktop/sale1@2x.webp 2x",
        },
        alt: "Літній розпродаж",
      },
    },
    {
      image: {
        src: "./images/desktop/sale2@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sale1@1x.webp 1x, ./images/mobile/sale1@2x.webp 2x",
          desktop:
            "./images/desktop/sale2@1x.webp 1x, ./images/desktop/sale2@2x.webp 2x",
        },
        alt: "Диванний цінопад",
      },
    },
    {
      image: {
        src: "./images/desktop/sale3@2x.webp",
        srcSet: {
          mobile:
            "./images/mobile/sale1@1x.webp 1x, ./images/mobile/sale1@2x.webp 2x",
          desktop:
            "./images/desktop/sale3@1x.webp 1x, ./images/desktop/sale3@2x.webp 2x",
        },
        alt: "Королівські скидки на м'які меблі",
      },
    },
  ];

  return (
    <ul className="promotions__list">
      {items.map((item) => (
        <PromotionsItem
          src={item.image.src}
          alt={item.image.alt}
          mobileImage={item.image.srcSet.mobile}
          desktopImage={item.image.srcSet.desktop}
        />
      ))}
    </ul>
  );
};
