export const PromotionsItem = ({ src, alt, mobileImage, desktopImage }) => {
  return (
    <li
      data-aos="flip-down"
      data-aos-duration="2500"
      className="promotions__item"
    >
      <picture>
        <source srcSet={desktopImage} media="min-width: 1200px" />
        <source srcSet={mobileImage} media="min-width: 320px" />
        <img
          src={src}
          alt={alt}
          className="promotions__photo promotions__photo1"
        />
      </picture>
    </li>
  );
};
