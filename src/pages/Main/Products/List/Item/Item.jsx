export const ProductsItem = ({ src, mobileImage, desktopImage, alt, size, mobileTitle, desktopTitle, inStock, oldPrice, currentPrice }) => {
    return (
        <li data-aos="zoom-in-right" data-aos-duration="1500" className="products__item">
                <picture>
                    <source srcSet={desktopImage} media="(min-width: 1200px)"/>
                    <source srcSet={mobileImage} media="(min-width: 320px)"/>
                    <img src={src} alt={alt}/>
                </picture>
                <p className="products__size">{size}</p>
                <a href="./product-card.html" className="products__subtitle-desktop">{desktopTitle}</a>
                <a href="./product-card.html" className="products__subtitle-mobile">{mobileTitle}</a>
                <div className="products__stock">
                    <svg className="products__stock-arrow">
                        <use href="./images/symbol-defs.svg#icon-check"></use>
                    </svg>
                    <p className="products__stock-text">{inStock ? "В наявності" : "Не в наяності"}</p>
                </div>
                <p className="products__old-price">{oldPrice}</p>
                <p className="products__price">{currentPrice}</p>
                <ul className="products__couple">
                    <li className="products__couple-item">
                        <button type="button" className="products__button">
                            <svg className="products__like-icon">
                                <use href="./images/symbol-defs.svg#icon-heart"></use>
                            </svg>
                        </button>
                    </li>
                    <li className="products__couple-item">
                        <a type="button" className="products__button" href="../../basket.html">
                            <svg className="products__basket-icon">
                                <use href="./images/symbol-defs.svg#icon-basket"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
    );
}