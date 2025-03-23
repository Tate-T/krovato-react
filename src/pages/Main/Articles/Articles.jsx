import { ArticlesList } from "./List/List";

import style from "../../../pages/Main/Articles/Articles.module.scss";
import containerStyle from "../../../components/Container/Container.module.scss";

export const Articles = () => {
  return (
    <section className={style.articles}>
      <div className={`${style.articlesContainer} ${containerStyle.container}`}>
        <div className={style.articles__titleBox}>
          <h2
            data-aos="zoom-out-right"
            data-aos-duration="1500"
            className={style.articles__title}
          >
            Свіжі статті та останні новини
          </h2>
          <a
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="link"
            className={style.articles__link}
            href="./blog.html"
          >
            Читати блог
            <svg className={style.articles__titleArrow}>
              <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
            </svg>
          </a>
          <ul className={style.articles__couple}>
            <li
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              className={style.articles__couplePart}
            >
              <button type="button" className="articles__button">
                <svg className={`${style.articles__arrow} ${style.articles__arrow1}`}>
                  <use href="./images/symbol-defs.svg#icon-main-hero-left"></use>
                </svg>
              </button>
            </li>
            <li
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className={style.articles__couplePart}
            >
              <button type="button" className={style.articles__button}>
                <svg className={`${style.articles__arrow} ${style.articles__arrow2}`}>
                  <use href="./images/symbol-defs.svg#icon-main-hero-right"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <ArticlesList />
        <button
          data-aos="zoom-in"
          data-aos-duration="2000"
          type="button"
          className={style.articles__mainButton}
        >
          <svg className={style.articles__mainButtonArrow}>
            <use href="./images/symbol-defs.svg#icon-reload"></use>
          </svg>
          <p className={style.articles__mainButtonText}>Показати ще товари</p>
        </button>
      </div>
    </section>
  );
};
