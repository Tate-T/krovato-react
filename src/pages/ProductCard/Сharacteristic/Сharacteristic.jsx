import style from './Сharacteristic.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'

export const Сharacteristic = () => {
    return (
        <section className={style.characteristic}>
            <div className={containerStyle.container}>
                <h2 className={style.characteristic__title}>Характеристики</h2>
                <ul className={style.characteristic__list}>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Довжина (см)</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>210, 200</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Ширина (см)</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>132</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Висота (см)</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>105</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Ширина спального місця (см)</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>120</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Довжина спального місця (см)</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>200, 190</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Розмір спального місця</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>120x200, 120x190</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Колір</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>Під замовлення</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Форма</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>Прямокутний</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Кількість ламелей</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>36</p>
                    </li>
                    <li className={style.characteristic__item} data-aos="fade-right" data-aos-duration="800">
                        <p className={style.characteristic__leftText}>Основа під матрац</p>
                        <div className={style.characteristic__dots}></div>
                        <p className={style.characteristic__rightText}>ламіль</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}