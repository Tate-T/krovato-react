import style from './PostReview.module.scss'

export const PostReview = () => {
    return (
        <div className={style.reviews__form}>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formTopBox}>
                <div className={style.reviews__formIconBox}>
                    <svg className={style.reviews__formIcon}>
                        <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
                    </svg>
                </div>
                <div>
                    <p className={style.reviews__formTitle}>Магазин меблів для дому «KROVATO»</p>
                    <div className={style.reviews__formTopStarBox}>
                        <p className={style.reviews__formTopStarText}>5.0</p>
                        <ul className={style.reviews__formTopStarList}>
                            <li className={style.reviews__formTopStarItem}>
                                <svg className={style.reviews__formTopStarIcon}>
                                    <use href="./images/symbol-defs.svg#icon-star"></use>
                                </svg>
                            </li>
                            <li className={style.reviews__formTopStarItem}>
                                <svg className={style.reviews__formTopStarIcon}>
                                    <use href="./images/symbol-defs.svg#icon-star"></use>
                                </svg>
                            </li>
                            <li className={style.reviews__formTopStarItem}>
                                <svg className={style.reviews__formTopStarIcon}>
                                    <use href="./images/symbol-defs.svg#icon-star"></use>
                                </svg>
                            </li>
                            <li className={style.reviews__formTopStarItem}>
                                <svg className={style.reviews__formTopStarIcon}>
                                    <use href="./images/symbol-defs.svg#icon-star"></use>
                                </svg>
                            </li>
                            <li className={style.reviews__formTopStarItem}>
                                <svg className={style.reviews__formTopStarIcon}>
                                    <use href="./images/symbol-defs.svg#icon-star"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <p className={style.reviews__formText}>Базовано на відгуках: 269</p>
                </div>
            </div>
            <form id="mob-reviews" className={style.reviews__formForm}>
                <h4 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormTitle}>
                    Залишіть свій відгук про магазин
                </h4>
                <ul data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormList}>
                    <li className={style.reviews__formFormItem}>
                        <input
                            className={style.reviews__formInput}
                            placeholder="Ваше ім'я прізвище"
                            required
                            type="text"
                        />
                    </li>
                    <li className={style.reviews__formFormItem}>
                        <input
                            className={style.reviews__formInput}
                            placeholder="E-mail"
                            required
                            type="email"
                        />
                    </li>
                    <li className={style.reviews__formFormItem}>
                        <input
                            className={`${style.reviews__formInput} ${style.reviews__thirdInput}`}
                            placeholder="Відгук"
                            type="text"
                        />
                    </li>
                </ul>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormRating}>Ваша оцінка:</p>
                <ul data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formList}>
                    <li className={style.reviews__formItem}>
                        <svg className={style.reviews__formStarIcon}>
                            <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                        </svg>
                    </li>
                    <li className={style.reviews__formItem}>
                        <svg className={style.reviews__formStarIcon}>
                            <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                        </svg>
                    </li>
                    <li className={style.reviews__formItem}>
                        <svg className={style.reviews__formStarIcon}>
                            <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                        </svg>
                    </li>
                    <li className={style.reviews__formItem}>
                        <svg className={style.reviews__formStarIcon}>
                            <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                        </svg>
                    </li>
                    <li className={style.reviews__formItem}>
                        <svg className={style.reviews__formStarIcon}>
                            <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                        </svg>
                    </li>
                </ul>
                <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormButton} type="submit">
                    Залишити відгук
                </button>
            </form>
        </div>
    )
}