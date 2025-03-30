import { CategoriesList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Categories.module.scss";

export const Categories = () => {
  return (
    <section className={style.categories}>
      <div className={`${containerStyle.container} ${style.categories__container}`}>
        <h2
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          className={style.categories__title}
        >
          Популярні категорії
        </h2>
        <CategoriesList />
      </div>
    </section>
  );
};
