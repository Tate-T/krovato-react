import style from './Conditions.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'
import { MdArrowOutward } from "react-icons/md"

export const Conditions = () => {
    return (
        <section className={style.conditions}>
            <div className={containerStyle.container}>
                <ul className={style.conditions__list}>
                    <li className={style.conditions__item} data-aos="fade-right" data-aos-duration="2000">
                        <div className={style.conditions__iconBc}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                {/* SVG доставкa */}
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Доставка</p>
                            <p className={style.conditions__text}>Доставка по Києву або по всій Україні</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <MdArrowOutward className={style.conditions__arrow} />
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-right" data-aos-duration="1000">
                        <div className={style.conditions__iconBc}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                {/* SVG оплата */}
                            </svg>
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Оплата</p>
                            <p className={style.conditions__text}>Готівкою, карткою або післяплатою</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <MdArrowOutward className={style.conditions__arrow} />
                            </a>
                        </div>
                    </li>
                    {/* Добавь следующие элементы аналогично: Гарантія, Підтримка */}
                </ul>
            </div>
        </section>
    )
}