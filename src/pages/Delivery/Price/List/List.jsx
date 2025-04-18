import { PriceItem } from "./Item/Item";

import style from "../Price.module.scss";

export const PriceList = ({ items }) => {
  return (
    <ul className={style.price__list}>
      {items.map((item) => (
        <PriceItem key={item.id} item={item} />
      ))}
    </ul>
  );
};