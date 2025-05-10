import style from "./LastReviews.module.scss"
import containerStyle from "../../components/Container/Container.module.scss";

export const LastReviews = () => {
  return (
    <section className={style.reviews}>
      <div className={`${containerStyle.container} ${style.reviews__container}`}>
    <div className={style.reviews__containerReviews}>
      <div>
    <h3 className={style.reviews__title}>Останні відгуки</h3>
    <div className={style.reviews__logoSofa}>
      {/* <svg className={style.reviews__iconSvg}>
        <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
      </svg> */}
    </div>
    <div className={style.reviews__info}>
      <h3 className={style.reviews__shop}>Магазин меблів для дому\n«KROVATO»</h3>
      <div className={style.reviews__starsContainer}>

      <ul className={style.reviews__stars}>
        <p className={style.reviews__rate}>5.0</p>
        <li className={style.reviews__star}>
          {/* <svg className={style.reviews__starSvg}>
            <use href="./images/symbol-defs.svg#icon-star"></use>
          </svg> */}
        </li>
        <li className={style.reviews__star}>
          {/* <svg className={style.reviews__starSvg}>
            <use href="./images/symbol-defs.svg#icon-star"></use>
          </svg> */}
        </li>
        <li className={style.reviews__star}>
          {/* <svg className={style.reviews__starSvg}>
            <use href="./images/symbol-defs.svg#icon-star"></use>
          </svg> */}
        </li>
        <li className={style.reviews__star}>
          {/* <svg className={style.reviews__starSvg}>
            <use href="./images/symbol-defs.svg#icon-star"></use>
          </svg> */}
        </li>
        <li className={style.reviews__star}>
          {/* <svg className={style.reviews__starSvg}>
            <use href="./images/symbol-defs.svg#icon-star"></use>
          </svg> */}
        </li>
      </ul>
    </div>
      <p className={style.reviews}>Базовано на відгуках: 269</p>
    </div>
      <div className={style.reviews__buttonContainer}>
      <button className={style.reviews__write}>
        {/* <svg className={style.reviews__writeSvg}>
          <use href="./images/symbol-defs.svg#icon-write-review"></use></svg> */}
          Написати відгук</button>
      <a className={style.reviews__allLink} href="#">
        {/* <svg className={style.reviews__starSvg}>
          <use href="./images/symbol-defs.svg#icon-chat"></use></svg> */}
          Всі відгуки</a>
        </div>
      </div>
    

    <ul className={style.reviews__list}>
      <li className={style.reviews__item}>
        <div>
          <div>
          {/* <svg className={style.reviews__avatar}>
            <use href="./images/symbol-defs.svg#icon-avatar"></use>
          </svg> */}
        </div>
        <div>
        <p className={style.reviews__name}>Іван Стедниця</p>
        <ul className={style.reviews__starsList}>
          <li className={style.reviews__starList}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
        </ul>
      </div>
        <p className={style.reviews__date}>25.01.2022</p>
      </div>
      {/* <!-- <svg className={style.reviews__scroll">
        <use href="./images/symbol-defs.svg#icon-scroll"></use>
      </svg> 
    FIX!!!--> */}
        <p className={style.reviews__text}>
          Хочу отметить слаженную и четкую работу всех сотрудников , с кем
          пришлось контактировать при выборе и покупке дивана Orange-Line Родео
          SF17-LX6-PLNGR. Огромную помощь при выборе оказала специалист по
          продажам Ульяна ...
        </p>
        <div className={style.reviews__imgContainer}>
        {/* <picture>
          <source
            srcset="
              ./images/main-page/bed-mk5@1x.webp 1x,
              ./images/main-page/bed-mk5@2x.webp 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ./images/main-page/phone/bed-sparta@1x.webp 1x,
              ./images/main-page/phone/bed-sparta@2x.webp 2x
            "
            media="(min-width: 480px)"
          />
          <img
            className={style.reviews__img}
            src="./images/main-page/bed-mk5@1x.webp"
            alt="bed"
          />
        </picture> */}
        <p className={style.reviews__bedName}>Диван Orange-Line Родео SF ...</p>
        </div>
      </li>
      <li className={style.reviews__item}>
        <div>
          <div>
          {/* <svg className={style.reviews__avatar}>
            <use href="./images/symbol-defs.svg#icon-avatar"></use>
          </svg> */}
        </div>
        <div>
        <p className={style.reviews__name}>Іван Стедниця</p>
        <ul className={style.reviews__starsList}>
          <li className={style.reviews__starList}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
        </ul>
      </div>
        <p className={style.reviews__date}>25.01.2022</p>
      </div>
      {/* <!-- <svg className={style.reviews__scroll">
        <use href="./images/symbol-defs.svg#icon-scroll"></use>
      </svg> 
    FIX!!!--> */}
        <p className={style.reviews__text}>
          Хочу отметить слаженную и четкую работу всех сотрудников , с кем
          пришлось контактировать при выборе и покупке дивана Orange-Line Родео
          SF17-LX6-PLNGR. Огромную помощь при выборе оказала специалист по
          продажам Ульяна ...
        </p>
        <div className={style.reviews__imgContainer}>
          {/* <picture>
            <source
              srcset="
                ./images/main-page/bed-mk5@1x.webp 1x,
                ./images/main-page/bed-mk5@2x.webp 2x
              "
              media="(min-width: 1200px)"
            />
            <source
              srcset="
                ./images/main-page/phone/bed-sparta@1x.webp 1x,
                ./images/main-page/phone/bed-sparta@2x.webp 2x
              "
              media="(min-width: 480px)"
            />
            <img
              className={style.reviews__img}
              src="./images/main-page/bed-mk5@1x.webp"
              alt="bed"
            />
          </picture> */}
        <p className={style.reviews__bedName}>Диван Orange-Line Родео SF ...</p>
        </div>
      </li>
      <li className={style.reviews__item}>
        <div>
          <div>
          {/* <svg className={style.reviews__avatar}>
            <use href="./images/symbol-defs.svg#icon-avatar"></use>
          </svg> */}
        </div>
        <div>
        <p className={style.reviews__name}>Іван Стедниця</p>
        <ul className={style.reviews__starsList}>
          <li className={style.reviews__starList}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
          <li className={style.reviews__star}>
            {/* <svg className={style.reviews__starSvg}>
              <use href="./images/symbol-defs.svg#icon-star"></use>
            </svg> */}
          </li>
        </ul>
      </div>
        <p className={style.reviews__date}>25.01.2022</p>
      </div>
      {/* <!-- <svg className={style.reviews__scroll">
        <use href="./images/symbol-defs.svg#icon-scroll"></use>
      </svg> 
    FIX!!!--> */}
        <p className={style.reviews__text}>
          Хочу отметить слаженную и четкую работу всех сотрудников , с кем
          пришлось контактировать при выборе и покупке дивана Orange-Line Родео
          SF17-LX6-PLNGR. Огромную помощь при выборе оказала специалист по
          продажам Ульяна ...
        </p>
        <div className={style.reviews__imgContainer}>
          {/* <picture>
            <source
              srcset="
                ./images/main-page/bed-mk5@1x.webp 1x,
                ./images/main-page/bed-mk5@2x.webp 2x
              "
              media="(min-width: 1200px)"
            />
            <source
              srcset="
                ./images/main-page/phone/bed-sparta@1x.webp 1x,
                ./images/main-page/phone/bed-sparta@2x.webp 2x
              "
              media="(min-width: 480px)"
            />
            <img
              className={style.reviews__img}
              src="./images/main-page/bed-mk5@1x.webp"
              alt="bed"
            />
          </picture> */}
        <p className={style.reviews__bedName}>Диван Orange-Line Родео SF ...</p>
        </div>
      </li>
    </ul>
    <ul className={style.reviews__list2}>
      <li className={style.reviews__item2}>
        <a href="#" className={style.reviews__empty}>
          {/* <svg className={style.reviews__emptySvg}>
            <use href="./images/symbol-defs.svg#icon-cycle"></use>
          </svg> */}
        </a>
        <a href="#" className={style.reviews__empty}>
          {/* <svg className={style.reviews__emptySvg}>
            <use href="./images/symbol-defs.svg#icon-cycle"></use>
          </svg> */}
        </a>
        <a href="#" className={style.reviews__empty}>
          {/* <svg className={style.reviews__fullSvg}>
            <use href="./images/symbol-defs.svg#icon-cycle-orange"></use>
          </svg> */}
        </a>
        <a href="#" className={style.reviews__empty}>
          {/* <svg className={style.reviews__emptySvg}>
            <use href="./images/symbol-defs.svg#icon-cycle"></use>
          </svg> */}
        </a>
        <a href="#" className={style.reviews__empty}>
          {/* <svg className={style.reviews__emptySvg}>
            <use href="./images/symbol-defs.svg#icon-cycle"></use>
          </svg> */}
        </a>
      </li>
    </ul>
  </div>
  <div className={style.reviews__sliderContainer}>
    <input type="range" min="0" max="200" value="0" className={style.reviews__customSlider} id="myRange"/>
  </div>
</div>
</section>
  );
};