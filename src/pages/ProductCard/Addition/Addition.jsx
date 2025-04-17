import style from './Addition.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'

export const Addition = () => {
    return (
        <section className={style.addition}>
            <div className={containerStyle.container}>
                <h2 className={style.addition__title}>Відмінно доповнюють спальню тумба або комод</h2>
                <ul className={style.addition__list}>
                    <li className={style.addition__item} data-aos="fade-left" data-aos-duration="500">
                    <img className={style.addition__img} src="./images/main-page/bed-sparta@1x.webp" alt="bed" />
                        <p className={style.addition__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.addition__text}>Ліжко Спарта / Sparta з підйомним механізмом</p>
                        <div className={style.addition__activeFlex}>
                            <svg className={style.addition__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.addition__active}>В наявності</p>
                        </div>
                        <div className={style.addition__itemFooter}>
                            <div className={style.addition__costFlex}>
                                <p className={style.addition__nonCost}>25 400 грн.</p>
                                <p className={style.addition__cost}>15 400 грн.</p>
                            </div>
                            <div className={style.addition__obraneBc}>
                                <svg className={style.addition__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.addition__koshykBc}>
                                <svg className={style.addition__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.addition__item} data-aos="fade-left" data-aos-duration="800">
                        <img className={style.addition__img} src="./images/main-page/bed-argon@1x.webp" alt="bed" />
                        <p className={style.addition__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.addition__text}>Ліжко Аргон з підйомним механізмом</p>
                        <div className={style.addition__activeFlex}>
                            <svg className={style.addition__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.addition__active}>В наявності</p>
                        </div>
                        <div className={style.addition__itemFooter}>
                            <p className={style.addition__cost}>16 400 грн.</p>
                            <div className={style.addition__obraneBc}>
                                <svg className={style.addition__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.addition__koshykBc}>
                                <svg className={style.addition__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.addition__item} data-aos="fade-left" data-aos-duration="1100">
                    <img className={style.addition__img} src="./images/main-page/bed-prestige@1x.webp" alt="bed" />
                        <p className={style.addition__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.addition__text}>Ліжко Престиж з підйомним механізмом</p>
                        <div className={style.addition__activeFlex}>
                            <svg className={style.addition__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.addition__active}>В наявності</p>
                        </div>
                        <div className={style.addition__itemFooter}>
                            <p className={style.addition__cost}>14 969 грн.</p>
                            <div className={style.addition__obraneBc}>
                                <svg className={style.addition__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.addition__koshykBc}>
                                <svg className={style.addition__koshykSvg}>
                                    <use href="./images/symbol-defs.svg#icon-korzina"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.addition__item} data-aos="fade-left" data-aos-duration="1400">
                    <img className={style.addition__img} src="./images/main-page/sofa-tokio@1x.webp" alt="bed" />
                        <p className={style.addition__size}>Розмір: 61 x 184 x 2130 мм</p>
                        <p className={style.addition__text}>Диван Токіо-2</p>
                        <div className={style.addition__activeFlex}>
                            <svg className={style.addition__svg}>
                                <use href="./images/symbol-defs.svg#icon-in-stock"></use>
                            </svg>
                            <p className={style.addition__active}>В наявності</p>
                        </div>
                        <div className={style.addition__itemFooter}>
                            <p className={style.addition__cost}>13 211 грн.</p>
                            <div className={style.addition__obraneBc}>
                                <svg className={style.addition__obraneSvg}>
                                    <use href="./images/symbol-defs.svg#icon-obrane-heard"></use>
                                </svg>
                            </div>
                            <div className={style.addition__koshykBc}>
                                <svg className={style.addition__koshykSvg}>
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