import { CategoriesItem } from "./Item/Item";

import style from "../Categories.module.scss";

export const CategoriesList = () => {
  const items = [
    {
      id: "category-1",
      title: "Ліжка",
      number: 54,
    },
    {
      id: "category-2",
      title: "Матраци",
      number: 30,
    },

    {
      id: "category-3",
      title: "М'які меблі",
      number: 196,
    },

    {
      id: "category-4",
      title: "Шафи",
      number: 79,
    },

    {
      id: "category-5",
      title: "Комоди",
      number: 54,
    },

    {
      id: "category-6",
      title: "Тумби",
      number: 64,
    },

    {
      id: "category-7",
      title: "Столи",
      number: 35,
    },

    {
      id: "category-8",
      title: "Стільці",
      number: 89,
    },

    {
      id: "category-9",
      title: "Меблеві стіни",
      number: 24,
    },

    {
      id: "category-10",
      title: "Кухні",
      number: 30,
    },
  ];

  return (
    <ul className={style.categories__list}>
      {items.map((item) => (
        <CategoriesItem key={item.id} title={item.title} number={item.number} />
      ))}
    </ul>
  );
};
