import { UkraineList } from "./List/List";
import { Disclaimers } from "./Disclaimers/Disclaimers";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./UkraineDelivery.module.scss";

import MobileUkraine1x from "../../../images/delivery/mobile/1x/ukraine@1x.webp";
import MobileUkraine2x from "../../../images/delivery/mobile/2x/ukraine@2x.webp";

import DesktopUkraine1x from "../../../images/delivery/desktop/1x/ukraine@1x.webp";
import DesktopUkraine2x from "../../../images/delivery/desktop/2x/ukraine@2x.webp";

export const UkraineDelivery = () => {
  return (
    <section className={style.ukraine}>
      <div
        className={`${containerStyle.container} ${style.ukraine__container}`}
      >
        <div className={style.ukraine__box}>
          <h3 className={style.ukraine__title}>Доставка по Україні:</h3>
          <UkraineList />
          <ul className={style.ukraine__delivery}>
            <li className={style.ukraine__element}>
              Послуга «Податковий платіж» – (оплата при отриманні замовлення),
              додатково до вартості замовлення оплачується +1.5-2% за послугу
              післяплати, залежно від обраного оператора вантажоперевезень.
            </li>
            <li className={style.ukraine__element}>
              Послуга «Утилізація старих меблів» – розраховується, виходячи з
              габаритів меблів або матраца і становить від 50 до 400грн.
              Додатково оплачується винесення меблів згідно з тарифами, на
              занесення товару.
            </li>
          </ul>
        </div>
          <img
            src={DesktopUkraine1x}
            alt="map of ukraine"
            className={style.ukraine__image}
          />
        <div className={style.ukraine__square}>
          <h4
            className={`${style.ukraine__squareTitle} ${style.ukraine__title}`}
          >
            При відправленні товару по Україні, акції: (занесення безкоштовно,
            наматрацник у подарунок, безкоштовне складання) не діють.
          </h4>
        </div>
      </div>
      <div className={`${containerStyle.container} ${style.ukraine__container}`}>
        <Disclaimers />
      </div>
    </section>
  );
};
