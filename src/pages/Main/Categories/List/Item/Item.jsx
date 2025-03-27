import style from "../../Categories.module.scss";

export const CategoriesItem = ({title, number}) => {
  return (
    <li className={style.categories__item}>
      <h3 className={style.categories__subtitle}>{title}</h3>
      <p className={style.categories__number}>{number}</p>
      <a className={style.categories__button} href="./catalog.html">
        <svg className={style.categories__icon}>
          <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
        </svg>
      </a>
    </li>
  );
};
