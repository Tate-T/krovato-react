import style from "../../Promotions.module.scss";

export const PromotionsItem = ({ activeSlide, id, src, alt, mobileImage, desktopImage }) => {
  
  return (
    <li
      key={id}
      data-aos="flip-down"
      data-aos-duration="2500"
      className={style.promotions__item}
      style={{right: (activeSlide - 1) * 107.4 + '%'}}
    >
      <picture>
        <source srcSet={desktopImage} media="min-width: 1200px" />
        <source srcSet={mobileImage} media="min-width: 320px" />
        <img
          src={src}
          alt={alt}
          className={`${style.promotions__photo} ${style.promotions__photo1}`}
        />
      </picture>
    </li>
  );
};
