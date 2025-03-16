export const Button = ({href = "#", className="categories__button", iconHref="./images/symbol-defs.svg#icon-upper-arrow"}) => {
  return (
    <a type="button" className={className} href={href}>
      <svg class="categories__icon">
        <use href={iconHref}></use>
      </svg>
    </a>
  );
};
