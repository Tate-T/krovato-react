import { CategoriesItem } from "./Item/Item";

import style from "../Categories.module.scss";
// import categories from './categories.json';

export const CategoriesList = ({data}) => {
  
  return (
    <ul className={style.categories__list}>
      {data.map((item) => (
        <CategoriesItem key={item.id} title={item.title} number={item.number} src = {item.image} />
      ))}
    </ul>
  );
};
