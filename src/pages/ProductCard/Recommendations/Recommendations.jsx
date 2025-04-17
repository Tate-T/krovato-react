import style from './Recommendations.module.scss'

export const Recommendations = () => {
    return (
        <section className={style.recommendations}>
            <div className={style.container}>
                <h2 className={style.recommendations__title}>Рекомендовані товари</h2>
                <ul className={style.recommendations__list}>
                    <li className={style.recommendations__item} data-aos="fade-left" data-aos-duration="500">
                    <img className={style.recommendations__img} src="./images/main-page/bed-sparta@1x.webp" alt="bed" />
                        <p className={style.recommendations__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.recommendations__text}>Ліжко Спарта / Sparta з підйомним механізмом</p>
                        <div className={style.recommendations__activeFlex}>
                            <svg className={style.recommendations__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.recommendations__active}>В наявності</p>
                        </div>
                        <div className={style.recommendations__itemFooter}>
                            <div className={style.recommendations__costFlex}>
                                <p className={style.recommendations__nonCost}>25 400 грн.</p>
                                <p className={style.recommendations__cost}>15 400 грн.</p>
                            </div>
                            <div className={style.recommendations__obraneBc}>
                                <svg className={style.recommendations__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.recommendations__koshykBc}>
                                <svg className={style.recommendations__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.recommendations__item} data-aos="fade-left" data-aos-duration="800">
                    <img className={style.recommendations__img} src="./images/main-page/bed-argon@1x.webp" alt="bed" />
                        <p className={style.recommendations__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.recommendations__text}>Ліжко Аргон з підйомним механізмом</p>
                        <div className={style.recommendations__activeFlex}>
                            <svg className={style.recommendations__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.recommendations__active}>В наявності</p>
                        </div>
                        <div className={style.recommendations__itemFooter}>
                            <p className={style.recommendations__cost}>16 400 грн.</p>
                            <div className={style.recommendations__obraneBc}>
                                <svg className={style.recommendations__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.recommendations__koshykBc}>
                                <svg className={style.recommendations__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.recommendations__item} data-aos="fade-left" data-aos-duration="1100">
                    <img className={style.recommendations__img} src="./images/main-page/bed-prestige@1x.webp" alt="bed" />
                        <p className={style.recommendations__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.recommendations__text}>Ліжко Престиж з підйомним механізмом</p>
                        <div className={style.recommendations__activeFlex}>
                            <svg className={style.recommendations__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.recommendations__active}>В наявності</p>
                        </div>
                        <div className={style.recommendations__itemFooter}>
                            <p className={style.recommendations__cost}>14 969 грн.</p>
                            <div className={style.recommendations__obraneBc}>
                                <svg className={style.recommendations__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.recommendations__koshykBc}>
                                <svg className={style.recommendations__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.recommendations__item} data-aos="fade-left" data-aos-duration="1400">
                    <img className={style.recommendations__img} src="./images/main-page/sofa-tokio@1x.webp" alt="bed" />
                        <p className={style.recommendations__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.recommendations__text}>Диван Токіо-2</p>
                        <div className={style.recommendations__activeFlex}>
                            <svg className={style.recommendations__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.recommendations__active}>В наявності</p>
                        </div>
                        <div className={style.recommendations__itemFooter}>
                            <p className={style.recommendations__cost}>13 211 грн.</p>
                            <div className={style.recommendations__obraneBc}>
                                <svg className={style.recommendations__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.recommendations__koshykBc}>
                                <svg className={style.recommendations__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>




    )
}