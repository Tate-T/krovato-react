import { CategoriesList } from "./List/List";

import style from "../../../components/Container/Container.module.scss";

export const Categories = () => {
  return (
    <section className="categories">
      <div className={style.container}> {/* categories__container потрібно додати */}
        <h2
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          className="categories__title"
        >
          Популярні категорії
        </h2>
        <CategoriesList />
      </div>
    </section>
  );
};
