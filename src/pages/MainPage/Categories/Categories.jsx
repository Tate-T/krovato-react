import { CategoriesList } from "./List/List";

import Container from "../../../components/Container/Container";
import style from "./Categories.module.scss";
import { useState, useEffect } from "react";

export function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const data = fetch(
        "https://6832fc72c3f2222a8cb48d25.mockapi.io/promo/categories"
      )
        .then((response) => response.json())
        .then((dataE) => {
          setData(dataE);
        });
    } catch (error) {
      console.log("server error" + error);
    }
  }, []);

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
        <CategoriesList data={data} />
      </Container>
    </section>
  );
}
