import style from "../../Articles.module.scss";

export const ArticlesItem = ({ title, src, alt, mobileImage, desktopImage }) => {
  return (
    <li
        data-aos="fade-up"
        data-aos-duration="2000"
        className={style.articles__item}
      >
        <picture>
          <source srcSet={desktopImage} media="(min-width: 1200px)"/>
          <source srcSet={mobileImage} media="(min-width: 320px)"/>
          <img src={src} alt={alt} className={style.articles__photo}/>
        </picture>
        <h3 className={style.articles__subtitle}>
          {title}
        </h3>
        <a className={style.articles__listLink} href="./article.html">
          Детальніше
          <svg className={style.articles__titleArrow}>
            <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
          </svg>
        </a>
      </li>
  );
};
