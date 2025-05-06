import style from './Conditions.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'
import dostavkaImg from '../../../images/product-card/dostavka.png'
import garant from '../../../images/product-card/garant.png'
import oplata from '../../../images/product-card/oplata.png'
import support from '../../../images/product-card/support.png'
import { MdArrowOutward } from "react-icons/md";


export const Conditions = () => {
    return (
        <section className={style.conditions}>
            <div className={containerStyle.container}>
                <ul className={style.conditions__list}>
                    <li className={style.conditions__item} data-aos="fade-right" data-aos-duration="2000">
                        <div className={style.conditions__iconBc}>
                            <img src={dostavkaImg} alt="Доставка" />
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
                            <img src={oplata} alt="Оплата" />
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Оплата</p>
                            <p className={style.conditions__text}>Карткою на сайті, готівкою або через термінал</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <MdArrowOutward className={style.conditions__arrow} />
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-left" data-aos-duration="1000">
                        <div className={style.conditions__iconBc}>
                            <img src={garant} alt="Гарантія" />
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Гарантія</p>
                            <p className={style.conditions__text}>Гарантія від виробника до 2 років</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <MdArrowOutward className={style.conditions__arrow} />
                            </a>
                        </div>
                    </li>
                    <li className={style.conditions__item} data-aos="fade-left" data-aos-duration="2000">
                        <div className={style.conditions__iconBc}>
                            <img src={support} alt="Підтримка" />
                        </div>
                        <div className={style.conditions__textBox}>
                            <p className={style.conditions__subtitle}>Підтримка</p>
                            <p className={style.conditions__text}>Безкоштовна консультація по вибору товара</p>
                            <a href="#" className={style.conditions__more}>
                                <span>Детальніше</span>
                                <MdArrowOutward className={style.conditions__arrow} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}