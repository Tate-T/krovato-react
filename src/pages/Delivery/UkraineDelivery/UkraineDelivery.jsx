import { UkraineList } from "./List/List";
import { Disclaimers } from "./Disclaimers/Disclaimers";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./UkraineDelivery.module.scss";

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

        <picture>
          <source
            srcset="
          ./images/desktop/ukraine@1x.webp     1x,
          ./images/desktop/ukraine-bed@2x.webp 2x
        "
            media="(min-width: 768px)"
          />
          <source
            srcset="
          ./images/mobile/ukraine@1x.webp 1x,
          ./images/mobile/ukraine@2x.webp 2x
        "
            media="(min-width: 320px)"
          />
          <img
            src="./images/desktop/ukraine@1x.webp"
            alt="map of ukraine"
            className={style.ukraine__image}
          />
        </picture>
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
