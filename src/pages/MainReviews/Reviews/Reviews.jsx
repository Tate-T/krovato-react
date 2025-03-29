import style from './Reviews.module.scss'
export const Reviews = () => {
    // const ReviewsPostsData = [

    // ]
    return (
        <div classNameName={style.reviews__section}>
            <ul className={style.reviews__reviewsList}>
                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Іван Стедниця</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Хочу отметить слаженную и четкую работу всех сотрудников , с кем
                        пришлось контактировать при выборе и покупке дивана Orange-Line
                        Родео SF17-LX6-PLNGR. Огромную помощь при выборе оказала
                        специалист по продажам Ульяна Лукащук, которая провела со мной не
                        один час( выбор был непростым, т.к диван необходимо было
                        приобрести для пожилого лежачего больного). А так же хочу
                        поблагодарить за понимание и человеческий подход сотрудника отдела
                        логистики Елькина Игоря, который смог найти возможность для
                        первоочередной доставки по городу, в самые кратчайшие сроки. А
                        также огромное спасибо специалистам доставки в конечную точку
                        Николаю и Вячеславу за их нелегкий труд в сложных условиях.
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <div className={style.reviews__reviewsIconTextBox}>
                            <svg className={style.reviews__reviewsIcon}>
                                <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
                            </svg>
                        </div>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>KROVATO</a>
                    </div>
                </li>
                
                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Ольга</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-half-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Покупали сыну игровое кресло в подарок. Качество супер, очень
                        удобное и отлично поддерживает спину. В общем подарком более чем
                        доволен) Отдельное спасибо магазину Мебельок за помощь в выборе
                        кресла!
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                ./images/reviews-page/aerocool@1x.webp 1x,
                ./images/reviews-page/aerocool@2x.webp 2x"
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                ./images/reviews-page/phone/sofa@1x.webp 1x,
                ./images/reviews-page/phone/sofa@2x.webp 2x"
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/aerocool@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Крісло для геймерів AEROCOOL EARL Steel Blue
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Нина</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-half-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-empty-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Для меня это супер-функциональный предмет мебели в моей спальне.
                        Ящиков не много и не мало, все помещается. А удобная полочка сбоку
                        дает возможность отставить туда часть вещей, дабы не загораживать
                        зеркало. К качеству тоже претензий не имею, на вид добротно.
                        Обслуживание - тоже на высоте.
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                ./images/reviews-page/trumo@1x.webp 1x,
                ./images/reviews-page/trumo@2x.webp 2x"
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                ./images/reviews-page/phone/sofa@1x.webp 1x,
                ./images/reviews-page/phone/sofa@2x.webp 2x"
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/trumo@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>Трюмо-7</a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Максим</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Стулья симпатичные и стильные, на кухне смотрятся отлично! Очень
                        удобно на них сидеть и качество так же радует. Доставили быстро.
                        Рекомендую!
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                ./images/reviews-page/chair@1x.webp 1x,
                ./images/reviews-page/chair@2x.webp 2x"
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                ./images/reviews-page/phone/sofa@1x.webp 1x,
                ./images/reviews-page/phone/sofa@2x.webp 2x"
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/chair@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Стілець обідній Kansas чорний/velvet grey
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Іван Стедниця</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Хочу отметить слаженную и четкую работу всех сотрудников , с кем
                        пришлось контактировать при выборе и покупке дивана Orange-Line
                        Родео SF17-LX6-PLNGR. Огромную помощь при выборе оказала
                        специалист по продажам Ульяна Лукащук, которая провела со мной не
                        один час( выбор был непростым, т.к диван необходимо было
                        приобрести для пожилого лежачего больного). А так же хочу
                        поблагодарить за понимание и человеческий подход сотрудника отдела
                        логистики Елькина Игоря, который смог найти возможность для
                        первоочередной доставки по городу, в самые кратчайшие сроки. А
                        также огромное спасибо специалистам доставки в конечную точку
                        Николаю и Вячеславу за их нелегкий труд в сложных условиях.
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <div className={style.reviews__reviewsIconTextBox}>
                            <svg className={style.reviews__reviewsIcon}>
                                <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
                            </svg>
                        </div>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>KROVATO</a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Ольга</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Покупали сыну игровое кресло в подарок. Качество супер, очень
                        удобное и отлично поддерживает спину. В общем подарком более чем
                        доволен) Отдельное спасибо магазину Мебельок за помощь в выборе
                        кресла!
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                    ./images/reviews-page/aerocool@1x.webp 1x,
                    ./images/reviews-page/aerocool@2x.webp 2x
                "
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/aerocool@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Крісло для геймерів AEROCOOL EARL Steel Blue
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Надія</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Отличная работа менеджера, доставили в указанное время, собрали
                        быстро и качественно. Спасибо за работу.
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                    ./images/reviews-page/bed@1x.webp 1x,
                    ./images/reviews-page/bed@2x.webp 2x
                "
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/bed@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Ліжко Саванна гірка
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Екатерина</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Добрый день всем. Работаем в большом родильном отделении
                        многопрофильной больницы. Очень долго искали партнеров для
                        приобретения мебели, что бы было не только красиво, стильно,
                        удобно, комфортно, но и бюджетно. Вот уже второй год сотрудничаем
                        с компанией mebelok. Заказывали матрасы, кровати, офисные
                        диванчики. Очень благодарны специалистам предприятия за быструю
                        обратную связь, квалифицированные консультации, оперативную
                        доставку товара и конечно же за качество производимой продукции.
                        Очень рады, что в Украине есть такие предприятия, которые
                        производят качественный, добротный товар. Ждем следующий заказ
                        (кровати для молодых мамочек) и надеемся на дальнейшее
                        сотрудничество. Екатерина
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                    ./images/reviews-page/matrace@1x.webp 1x,
                    ./images/reviews-page/matrace@2x.webp 2x
                "
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/matrace@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Ортопедический матрас Эко-Lite 90х190
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Назар</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        спасибо менеджерам на бажана за то что помогли выбрать данный
                        журнальный столик в гостинную! очень стильный, вписался идеально,
                        при этом цена очень даже приемлема как для такого товара)
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                    ./images/reviews-page/table@1x.webp 1x,
                    ./images/reviews-page/table@2x.webp 2x
                "
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/table@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Столик журнальний СЖ-101
                        </a>
                    </div>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={style.reviews__reviewsItem}>
                    <div className={style.reviews__reviewsBoxTop}>
                        <div className={style.reviews__reviewsIconBox}>
                            <svg className={style.reviews__reviewsIconPeople}>
                                <use href="./images/symbol-defs.svg#icon-avatar"></use>
                            </svg>
                        </div>
                        <div className={style.reviews__reviewsMobBox}>
                            <p className={style.reviews__reviewsName}>Ольга</p>
                            <ul className={style.reviews__reviewsStarList}>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                                <li className={style.reviews__reviewsStarItem}>
                                    <svg className={style.reviews__reviewsStarIcon}>
                                        <use href="./images/symbol-defs.svg#icon-star"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p className={style.reviews__reviewsDate}>25.01.2022</p>
                    </div>
                    <p className={style.reviews__reviewsText}>
                        Покупали сыну игровое кресло в подарок. Качество супер, очень
                        удобное и отлично поддерживает спину. В общем подарком более чем
                        доволен) Отдельное спасибо магазину Мебельок за помощь в выборе
                        кресла!
                    </p>
                    <div className={style.reviews__reviewsBox}>
                        <picture>
                            <source
                                srcSet="
                    ./images/reviews-page/aerocool@1x.webp 1x,
                    ./images/reviews-page/aerocool@2x.webp 2x
                "
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                                media="(min-width: 320px)"
                            />
                            <img
                                src="./images/reviews-page/aerocool@1x.webp"
                                alt=""
                                className={style.reviews__reviewsImg}
                            />
                        </picture>
                        <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                            Крісло для геймерів AEROCOOL EARL Steel Blue
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}