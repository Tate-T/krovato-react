import style from "../../Products.module.scss";

export const ProductsItem = ({ id, src, mobileImage, desktopImage, alt, size, mobileTitle, desktopTitle, inStock, oldPrice, currentPrice }) => {
    return (
        <li key={id} data-aos="zoom-in-right" data-aos-duration="1500" className={style.products__item}>
                <picture>
                    <source srcSet={desktopImage} media="(min-width: 1200px)"/>
                    <source srcSet={mobileImage} media="(min-width: 320px)"/>
                    <img src={src} alt={alt}/>
                </picture>
                <p className={style.products__size}>{size}</p>
                <a href="./product-card.html" className={style.products__subtitleDesktop}>{desktopTitle}</a>
                <a href="./product-card.html" className={style.products__subtitleMobile}>{mobileTitle}</a>
                <div className={style.products__stock}>
                    <svg className={style.products__stockArrow}>
                        <use href="./images/symbol-defs.svg#icon-check"></use>
                    </svg>
                    <p className={style.products__stockText}>{inStock ? "В наявності" : "Не в наяності"}</p>
                </div>
                <p className={style.products__oldPrice}>{oldPrice}</p>
                <p className={style.products__price}>{currentPrice}</p>
                <ul className={style.products__couple}>
                    <li className={style.products__coupleItem}>
                        <button type="button" className={style.products__button}>
                            <svg className={style.products__likeIcon}>
                                <use href="./images/symbol-defs.svg#icon-heart"></use>
                            </svg>
                        </button>
                    </li>
                    <li className={style.products__coupleItem}>
                        <a type="button" className={style.products__button} href="...">
                            <svg className={style.products__basketIcon}>
                                <use href="./images/symbol-defs.svg#icon-basket"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
    );
}