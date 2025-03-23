export const CategoriesItem = ({title, number}) => {
  return (
    <li className="categories__item">
      <h3 className="categories__subtitle">{title}</h3>
      <p className="categories__number">{number}</p>
      <a className="categories__button" href="./catalog.html">
        <svg className="categories__icon">
          <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
        </svg>
      </a>
    </li>
  );
};
