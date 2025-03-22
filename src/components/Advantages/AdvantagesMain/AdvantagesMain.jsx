export const AdvantagesMain = () => { 
	return (
      <ul className={style.advantages__list}>
        <li className={style.advantages__item}>
          <svg className={style.advantages__icon}>
            <use href="./images/symbol-defs.svg#icon-bus"></use>
          </svg>
          <p className="advantages__text">Безкоштовна доставка</p>
        </li>
        <li className={style.advantages__item}>
          <svg className={style.advantages__icon}>
            <use href="./images/symbol-defs.svg#icon-korobka"></use>
          </svg>
          <p className="advantages__text">Безкоштовна збірка</p>
        </li>
        <li className={style.advantages__item}>
          <svg className={style.advantages__icon}>
            <use href="./images/symbol-defs.svg#icon-headphone"></use>
          </svg>
          <p className="advantages__text">Післягарантійне обслуговування</p>
        </li>
        <li className={style.advantages__item}>
          <svg className={style.advantages__icon}>
              <use href="./images/symbol-defs.svg#icon-discounts"></use>
          </svg>
          <p className="advantages__text">Знижки клієнтам</p>
        </li>
      </ul>
	)
}