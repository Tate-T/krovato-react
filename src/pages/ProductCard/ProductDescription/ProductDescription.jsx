import style from './ProductDescription.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'

export const ProductDescription = () => {
    return (
        <section className={style.description}>
            <div className={`${containerStyle.container} ${style.description__container}`}>
                <div className={style.description__content}>
                    <h2 className={style.description__title}>Опис товару</h2>
                    <p className={style.description__text}>
                        Модель МК-1 – це ліжко від українського виробника, компанії MegaMebli. Вона
                        виготовляється з ДСП та оснащена м'якою спинкою. Також може бути виготовлена з дерев'яного щита (сосни).
                        Ламелі виконані з бука. Подібна конструкція характеризується надійністю та привабливим зовнішнім виглядом.
                    </p>
                    <img className={style.description__image} src="./images/card-catalog/palette@1x.webp" alt="bed" />
                </div>
                <div className={style.descriptionForm__bug}>
                    <form action="" className={style.descriptionForm}>
                        <h2 className={style.descriptionForm__title}>Залишіть свій відгук</h2>
                        <input
                            type="text"
                            className={`${style.descriptionForm__input} ${style.descriptionForm__inputName}`}
                            placeholder="Ваше ім'я прізвище"
                            required
                        />
                        <input
                            type="text"
                            className={`${style.descriptionForm__input} ${style.descriptionForm__inputMail}`}
                            placeholder="E-mail"
                            required
                        />
                        <input
                            type="text"
                            className={`${style.descriptionForm__input} ${style.descriptionForm__inputReview}`}
                            placeholder="Відгук"
                            required
                        />
                        <p className={style.descriptionForm__text}>Ваша оцінка:</p>
                        <ul className={style.descriptionForm__list}>
                            {[...Array(5)].map((_, i) => (
                                <li key={i} className={style.descriptionForm__item}>
                                    <svg className={style.descriptionForm__svg}>
                                        <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                                    </svg>
                                </li>
                            ))}
                        </ul>
                        <button className={style.descriptionForm__btn} type="submit">Залишити відгук</button>
                    </form>
                </div>
            </div>
        </section>
    )
}