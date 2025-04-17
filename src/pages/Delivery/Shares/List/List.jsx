import { SharesItem } from "./Item/Item";

import style from "../Shares.module.scss";

export const SharesList = () => {
  const sharesList = [
    {
      id: "sharing-1",
      text: "При покупці ліжка з матрацом більше 7000 грн. (вартість матрацу) занесення ліфтом та складання БЕЗКОШТОВНО *",
    },
    {
      id: "sharing-2",
      text: "При покупці ліжка з матрацом більше 10000 грн. знижка 5% на матрац + доставка, занесення ліфтом та складання БЕЗКОШТОВНО *",
    },
    {
      id: "sharing-3",
      text: "Купуючи матрац від 7000 грн. доставка та занесення БЕЗКОШТОВНО *",
    },
    {
      id: "sharing-4",
      text: "Купуючи матрац від 10000 грн. доставка та занесення БЕЗКОШТОВНО * + знижка 5% на матрац",
    },
    {
      id: "sharing-5",
      text: "При покупці столу та 2-х стільців доставка та занесення БЕЗКОШТОВНО *",
    },
  ];

  return (
    <ul className={style.shares__list}>
      {sharesList.map((item) => (
        <SharesItem key={item.id} svg={item.svg} text={item.text} />
      ))}
    </ul>
  );
};
