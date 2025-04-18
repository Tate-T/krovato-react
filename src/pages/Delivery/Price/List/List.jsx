import { PriceItem } from "./Item/Item";

import style from "../Price.module.scss";

export const PriceList = ({ items, hasTableHandlers }) => {
  return (
    <ul className={style.price__list}>
      {hasTableHandlers && (
        <li class={`${style.price__item} ${style.price__element}`}>
          <p class={`${style.price__text} ${style.price__text1}`}>Послуга</p>
          <p class={`${style.price__free} ${style.price__text1}`}>Є ліфт</p>
          <p class={`${style.price__price} ${style.price__text1}`}>
            Ліфта немає/не працює/ щось не міститься
          </p>
        </li>
      )}
      {items.map((item) => (
        <PriceItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
