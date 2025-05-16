import { PromotionsItem } from "./Item/Item";

import style from "../Promotions.module.scss";

import Mobile1xSale from "../../../../images/main/mobile/1x/sale@1x.webp";
import Mobile2xSale from "../../../../images/main/mobile/2x/sale@2x.webp";

import Desktop1xSale1 from "../../../../images/main/desktop/1x/sale1@1x.webp";
import Desktop2xSale1 from "../../../../images/main/desktop/2x/sale1@2x.webp";

import Desktop1xSale2 from "../../../../images/main/desktop/1x/sale2@1x.webp";
import Desktop2xSale2 from "../../../../images/main/desktop/2x/sale2@2x.webp";

import Desktop1xSale3 from "../../../../images/main/desktop/1x/sale3@1x.webp";
import Desktop2xSale3 from "../../../../images/main/desktop/2x/sale3@2x.webp";

import Sale4 from '../../../../images/discount/black-friday.jpg';

import Sale5 from '../../../../images/discount/summer-sale.png';

export const PromotionsList = ({activeSlide}) => {
  const items = [
    {
      id: "promotion-1",
      image: {
        src: `${Desktop1xSale1}`,
        srcSet: {
          mobile:
            `${Mobile1xSale}, ${Mobile2xSale}`,
          desktop:
            `${Desktop1xSale1}, ${Desktop2xSale1}`,
        },
        alt: "Літній розпродаж",
      },
    },
    {
      id: "promotion-2",
      image: {
        src: `${Desktop1xSale2}`,
        srcSet: {
          mobile:
            `${Mobile1xSale}, ${Mobile2xSale}`,
          desktop:
            `${Desktop1xSale2}, ${Desktop2xSale2}`,
        },
        alt: "Диванний цінопад",
      },
    },
    {
      id: "promotion-3",
      image: {
        src: `${Desktop1xSale3}`,
        srcSet: {
          mobile:
            `${Mobile1xSale}, ${Mobile2xSale}`,
          desktop:
            `${Desktop1xSale3}, ${Desktop2xSale3}`,
        },
        alt: "Королівські скидки на м'які меблі",
      },
    },
    {
      id: "promotion-4",
      image: {
        src: `${Sale4}`,
        alt: "Чорна п'ятниця",
      },
    },
    {
      id: "promotion-5",
      image: {
        src: `${Sale5}`,
        alt: "Літня розпродаж",
      },
    },
  ];

  return (
    <ul className={style.promotions__list}>
      {items.map((item) => (
        <PromotionsItem
          activeSlide={activeSlide}
          key={item.id}
          src={item.image.src}
          alt={item.image.alt}
          mobileImage={item.image.srcSet?.mobile}
          desktopImage={item.image.srcSet?.desktop}
        />
      ))}
    </ul>
  );
};
