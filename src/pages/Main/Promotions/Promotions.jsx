import { PromotionsList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Promotions.module.scss";

export const Promotions = () => {
  return (
    <section className={style.promotions}>
      <div className={`${containerStyle.container} ${style.promotions__container}`}>
        <div className={style.promotions__titleBox}>
          <h2
            data-aos="zoom-out-right"
            data-aos-duration="1500"
            className={style.promotions__title}
          >
            Акції
          </h2>
          <a
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="link"
            className={style.promotions__link}
            href="..."
          >
            Дивитись всі
            <svg className={style.promotions__titleArrow}>
              <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
            </svg>
          </a>
          <ul className={style.promotions__couple}>
            <li
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              className={style.promotions__couplePart}
            >
              <button type="button" className={style.promotions__button}>
                <svg className={`${style.promotions__arrow} ${style.promotions__arrow1}`}>
                  <use href="./images/symbol-defs.svg#icon-main-hero-left"></use>
                </svg>
              </button>
            </li>
            <li
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className={style.promotions__couplePart}
            >
              <button type="button" className={style.promotions__button}>
                <svg className={`${style.promotions__arrow} ${style.promotions__arrow2}`}>
                  <use href="./images/symbol-defs.svg#icon-main-hero-right"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <PromotionsList />
        <ul className={style.promotions__circles}>
          <li className={style.promotions__circle}>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className={style.promotions__round}
            ></div>
          </li>
          <li className={style.promotions__circle}>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className={style.promotions__round}
            ></div>
          </li>
          <li className={style.promotions__circle}>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={style.promotions__round}
            ></div>
          </li>
          <li className={style.promotions__circle}>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className={style.promotions__round}
            ></div>
          </li>
          <li className={style.promotions__circle}>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className={style.promotions__round}
            ></div>
          </li>
        </ul>
      </div>
    </section>
  );
};
