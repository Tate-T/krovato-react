import style from './Conditions.module.scss'

export const Conditions = () => {
    return (
        <section className={style.conditions}>
            <div className={style.container}>
                <ul className={style.conditions__list}>
                    <li className={style.conditions__item} data-aos="fade-right" data-aos-duration="2000">
                        <div className={style.conditions__iconBc}>
                            <svg className={style.conditions__svg}>
                                <use href="./images/symbol-defs.svg#icon-adres"></use>
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Доставка</p>
                            <p className={style.conditions__text}>Доставка по Києву або по всій Україні</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <svg className={style.conditions__arrow}>
                                    <use href="./images/symbol-defs.svg#icon-arrow-to-top-right"></use>
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-right" data-aos-duration="1000">
                        <div className={style.conditions__iconBc}>
                            <svg className={style.conditions__svg}>
                                <use href="./images/symbol-defs.svg#icon-oplata"></use>
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Оплата</p>
                            <p className={style.conditions__text}>Карткою на сайті, готівкою або через термінал</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <svg className={style.conditions__arrow}>
                                    <use href="./images/symbol-defs.svg#icon-arrow-to-top-right"></use>
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-left" data-aos-duration="1000">
                        <div className={style.conditions__iconBc}>
                            <svg className={style.conditions__svg}>
                                <use href="./images/symbol-defs.svg#icon-garantia"></use>
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Гарантія</p>
                            <p className={style.conditions__text}>Гарантія від виробника до 2 років</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <svg className={style.conditions__arrow}>
                                    <use href="./images/symbol-defs.svg#icon-arrow-to-top-right"></use>
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-left" data-aos-duration="2000">
                        <div className={style.conditions__iconBc}>
                            <svg className={style.conditions__svg}>
                                <use href="./images/symbol-defs.svg#icon-sms-check"></use>
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Підтримка</p>
                            <p className={style.conditions__text}>Безкоштовна консультація по вибору товара</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <svg className={style.conditions__arrow}>
                                    <use href="./images/symbol-defs.svg#icon-arrow-to-top-right"></use>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}