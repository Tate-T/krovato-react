import { KyivItem } from "./Item/Item";

import style from "../KyivDelivery.module.scss";

export const KyivList = () => {
    const kyivDelivery = [
        {
            id: "kyiv-delivery-1",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: "Доставка ліжка чи матраца від 6000 грн. по Києву безкоштовна .",
        },
        {
            id: "kyiv-delivery-2",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: "У доставку входить підйом на поверх ліфтом та занесення до квартири (занесення сходами оплачується додатково)",
        },
        {
            id: "kyiv-delivery-3",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: "Доставка дивана до під'їзду по Києву безкоштовна.",
        },
    ];

  return (
    <ul className={style.kyiv__list}>
        {kyivDelivery.map((item) => (
            <KyivItem key={item.id} svg={item.svg} text={item.text} />
        ))}
    </ul>
  );
};
