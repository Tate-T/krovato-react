import { CategoriesItem } from "./Item/Item";

export const CategoriesList = () => {
  const items = [
    {
      title: "Ліжка",
      number: 54,
    },

    {
      title: "Матраци",
      number: 30,
    },

    {
      title: "М'які меблі",
      number: 196,
    },

    {
      title: "Шафи",
      number: 79,
    },

    {
      title: "Комоди",
      number: 54,
    },

    {
      title: "Тумби",
      number: 64,
    },

    {
      title: "Столи",
      number: 35,
    },

    {
      title: "Стільці",
      number: 89,
    },

    {
      title: "Меблеві стіни",
      number: 24,
    },

    {
      title: "Кухні",
      number: 30,
    },
  ];

  return (
    <ul className="categories__list">
      {items.map((item) => (
        <CategoriesItem title={item.title} number={item.number} />
      ))}
    </ul>
  );
};
