import { KyivItem } from "./Item/Item";

import style from "../KyivDelivery.module.scss";

export const KyivList = () => {
    const kyivDelivery = [
        {
            id: "kyiv-delivery-1",
            hasIcon: true,
            text: "Доставка ліжка чи матраца від 6000 грн. по Києву безкоштовна .",
        },
        {
            id: "kyiv-delivery-2",
            hasIcon: true,
            text: "У доставку входить підйом на поверх ліфтом та занесення до квартири (занесення сходами оплачується додатково)",
        },
        {
            id: "kyiv-delivery-3",
            hasIcon: true,
            text: "Доставка дивана до під'їзду по Києву безкоштовна.",
        },
        {
            id: "kyiv-delivery-4",
            hasIcon: false,
            text: "Доставка так само безкоштовна у: Вишневе, Петропавлівська Борщагівка, Софіївська Борщагівка, Новосілки, Чайки, Коцюбинське",
        },
        {
            id: "kyiv-delivery-5",
            hasIcon: false,
            text: "Доставка у міста: Вишгород - 200 грн, Бровари - 250 грн, Бориспіль - 300 грн, Ірнінь - 200 грн, Буча - 250 грн, Гостомель - 300 грн",
        },
    ];

  return (
    <ul className={style.kyiv__list}>
        {kyivDelivery.map((item) => (
            <KyivItem key={item.id} hasIcon={item.hasIcon} text={item.text} />
        ))}
    </ul>
  );
};
