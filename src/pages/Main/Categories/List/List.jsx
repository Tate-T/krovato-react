import { CategoriesItem } from "./Item/Item";

import style from "../Categories.module.scss";
import categories from './categories.json';

export const CategoriesList = () => {
  
  return (
    <ul className={style.categories__list}>
      {categories.map((item) => (
        <CategoriesItem key={item.id} title={item.title} number={item.number} />
      ))}
    </ul>
  );
};
