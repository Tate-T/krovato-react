import { PromotionsItem } from "./Item/Item";

import style from "../Promotions.module.scss";

export const PromotionsList = ({ data, activeSlide }) => {

  return (
    <ul className={style.promotions__list}>
      {data.map((item) => {

        return (
          <PromotionsItem
            key={item.id}
            src={item.photo}
            alt={item.name}
            activeSlide={activeSlide}
          />
        );
      })}
    </ul>
  );
};
