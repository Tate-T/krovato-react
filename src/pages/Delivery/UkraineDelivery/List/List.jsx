import { UkraineItem } from "./Item/Item";

import style from "../UkraineDelivery.module.scss";

export const UkraineList = () => {
    const ukraineDelivery = [
        {
            id: "ukraine-delivery-1",
            hasIcon: true,
            text: 'Доставка по Україні здійснюється за рахунок клієнта на відділення або адресно клієнту перевізником: "Нової Пошти, Міст експрес, Автолюкс".',
        },
        {
            id: "ukraine-delivery-2",
            hasIcon: true,
            text: 'Металеві ліжка доставляють за межі Київської області "Новою поштою" адресно за рахунок клієнта (орієнтовна вартість доставки 250-300 грн).',
        },
        {
            id: "ukraine-delivery-3",
            hasIcon: true,
            text: '"Додаткова" відправка, наприклад (ящиків, тумб або комода) оплачується клієнтом.',
        }
    ];

  return (
    <ul className={style.ukraine__list}>
        {ukraineDelivery.map((item) => (
            <UkraineItem key={item.id} hasIcon={item.hasIcon} text={item.text} />
        ))}
    </ul>
  );
};
