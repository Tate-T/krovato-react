export const ArticlesItem = ({ title, src, alt, mobileImage, desktopImage }) => {
  return (
    <li
        data-aos="fade-up"
        data-aos-duration="2000"
        className="articles__item"
      >
        <picture>
          <source srcSet={desktopImage} media="(min-width: 1200px)"/>
          <source srcSet={mobileImage} media="(min-width: 320px)"/>
          <img src={src} alt={alt} className="articles__photo"/>
        </picture>
        <h3 className="articles__subtitle">
          {title}
        </h3>
        <a className="articles__listLink" href="./article.html">
          Детальніше
          <svg className="articles__titleArrow">
            <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
          </svg>
        </a>
      </li>
  );
};
