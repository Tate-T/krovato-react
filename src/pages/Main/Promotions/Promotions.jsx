import { PromotionsList } from "./List/List";

import style from "../../../components/Container/Container.module.scss";

export const Promotions = () => {
  return (
    <section className="promotions">
      <div className={style.container}> {/* promotions__container потрібно додати */}
        <div className="promotions__title-box">
          <h2
            data-aos="zoom-out-right"
            data-aos-duration="1500"
            className="promotions__title"
          >
            Акції
          </h2>
          <a
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="link"
            className="promotions__link"
            href="./catalog.html"
          >
            Дивитись всі
            <svg className="promotions__title-arrow">
              <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
            </svg>
          </a>
          <ul className="promotions__couple">
            <li
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              className="promotions__couple-part"
            >
              <button type="button" className="promotions__button">
                <svg className="promotions__arrow promotions__arrow1">
                  <use href="./images/symbol-defs.svg#icon-main-hero-left"></use>
                </svg>
              </button>
            </li>
            <li
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className="promotions__couple-part"
            >
              <button type="button" className="promotions__button">
                <svg className="promotions__arrow promotions__arrow2">
                  <use href="./images/symbol-defs.svg#icon-main-hero-right"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <PromotionsList />
        <ul className="promotions__circles">
          <li className="promotions__circle">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="promotions__round"
            ></div>
          </li>
          <li className="promotions__circle">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="promotions__round"
            ></div>
          </li>
          <li className="promotions__circle">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="promotions__round"
            ></div>
          </li>
          <li className="promotions__circle">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="promotions__round"
            ></div>
          </li>
          <li className="promotions__circle">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="promotions__round"
            ></div>
          </li>
        </ul>
      </div>
    </section>
  );
};
