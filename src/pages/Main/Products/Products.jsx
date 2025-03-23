import { ProductsList } from "./List/List";

import style from "../../../components/Container/Container.module.scss";

export const Products = () => {
    return (
        <section className="products">
            <div className={style.container}> {/* products__container потрібно додати */}
                <div className="products__title-box">
                    <h2 data-aos="zoom-out-right" data-aos-duration="1500" className="products__title">
                        Найпопулярніші товари
                    </h2>
                    <a data-aos="zoom-in-left" data-aos-duration="1500" className="products__link" href="...">
                        Дивитись всі
                        <svg className="products__arrow">
                            <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
                        </svg>
                    </a>
                </div>
                <ProductsList />
                <button data-aos="zoom-in" data-aos-duration="2000" className="products__last-button">
                    <svg className="products__button-icon">
                        <use href="./images/symbol-defs.svg#icon-reload"></use>
                    </svg>
                    <span className="products__button-text">Показати ще товари</span>
                </button>
            </div>
        </section>
    );
}