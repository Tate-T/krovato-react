import { UkraineItem } from "./Item/Item";

import style from "../UkraineDelivery.module.scss";

export const UkraineList = () => {
    const ukraineDelivery = [
        {
            id: "ukraine-delivery-1",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: 'Доставка по Україні здійснюється за рахунок клієнта на відділення або адресно клієнту перевізником: "Нової Пошти, Міст експрес, Автолюкс".',
        },
        {
            id: "ukraine-delivery-2",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: 'Металеві ліжка доставляють за межі Київської області "Новою поштою" адресно за рахунок клієнта (орієнтовна вартість доставки 250-300 грн).',
        },
        {
            id: "ukraine-delivery-3",
            svg: "./images/symbol-defs.svg#icon-border-check",
            text: '"Додаткова" відправка, наприклад (ящиків, тумб або комода) оплачується клієнтом.',
        },
    ];

  return (
    <ul className={style.ukraine__list}>
        {ukraineDelivery.map((item) => (
            <UkraineItem key={item.id} svg={item.svg} text={item.text} />
        ))}
    </ul>
  );
};
