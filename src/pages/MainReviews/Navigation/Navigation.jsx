import style from './Navigation.module.scss'
import { Link } from 'react-router-dom'
import sprite from '../../../images/symbol-defs.svg';
export const Navigation = () => {
    return (
        <div className="mainNav">
            <nav className={style.pay__navigation}>
                <Link className={style.pay__mainLink} to="/">Головна</Link>
                <svg data-aos="fade-down" data-aos-duration="1000" className={style.pay__icon}>
                    <use href={`${sprite}#icon-arrow`}></use>
                </svg>
                <a data-aos="fade-left" data-aos-duration="500" className={style.pay__payLink} href="#advantages">Відгуки</a>
            </nav>
            <h2 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="0" class={style.reviews__title}>Відгуки</h2>
            <ul className={style.reviews__list}>
                <li className={style.reviews__item}>
                    <a data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300" href="" className={`${style.reviews__link} ${style.reviews__firstLink}`}>Всі відгуки</a>
                </li>
                <li className="reviews__item">
                    <a data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400" href="" className={style.reviews__link}>Про товари</a>
                </li>
                <li className="reviews__item">
                    <a data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500" href="" className={style.reviews__link}>Про Магазин</a>
                </li>
            </ul>
        </div>
    )
}