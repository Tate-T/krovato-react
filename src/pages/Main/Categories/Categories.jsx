import { CategoriesList } from "./List/List";

import Container from "../../../components/Container/Container";
import style from "./Categories.module.scss";

export const Categories = () => {
  return (
    <section className={style.categories}>
      <Container className={style.categories__container}>
        <h2
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          className={style.categories__title}
        >
          Популярні категорії
        </h2>
        <CategoriesList />
      </Container>
    </section>
  );
};
