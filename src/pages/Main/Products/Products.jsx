import { ProductsList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Products.module.scss";

export const Products = () => {
    return (
        <section className={style.products}>
            <div className={`${containerStyle.container} ${style.products__container}`}>
                <div className={style.products__titleBox}>
                    <h2 data-aos="zoom-out-right" data-aos-duration="1500" className={style.products__title}>
                        Найпопулярніші товари
                    </h2>
                    <a data-aos="zoom-in-left" data-aos-duration="1500" className={style.products__link} href="...">
                        Дивитись всі
                        <svg className={style.products__arrow}>
                            <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
                        </svg>
                    </a>
                </div>
                <ProductsList />
                <button data-aos="zoom-in" data-aos-duration="2000" className={style.products__lastButton}>
                    <svg className={style.products__buttonIcon}>
                        <use href="./images/symbol-defs.svg#icon-reload"></use>
                    </svg>
                    <span className={style.products__buttonText}>Показати ще товари</span>
                </button>
            </div>
        </section>
    );
}