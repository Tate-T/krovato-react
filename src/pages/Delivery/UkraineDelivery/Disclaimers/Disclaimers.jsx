import { Disclaimer } from "./Disclaimer/Discleamer";

import style from "../UkraineDelivery.module.scss";

export const Disclaimers = () => {
  const disclaimers = [
    {
      id: "disclaimer-1",
      text: "*В усіх випадках зазначена вартість доставки до під'їзду (воріт приватного будинку). У базову вартість доставки не входить вартість занесення меблів. Занесення товару на поверх/у квартиру здійснюється за домовленістю за окрему оплату.",
    },
    {
      id: "disclaimer-2",
      text: "** додаткове упакування товару оплачується клієнтом у будь-якому випадку! Увага! Вартість доставки вказана до парадного будинку (воріт приватного будинку) і не враховує занесення товару. Занесення товару здійснюється за домовленістю за окрему оплату згідно з тарифами, на занесення товару.",
    },
  ];

  return (
    <ul className={style.ukraine__disclaimers}>
      {disclaimers.map((item) => (
        <Disclaimer key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
