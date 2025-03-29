import { PriceList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Price.module.scss";

export const Price = () => {
  const priceData = [
    {
      category: "Складання",
      items: [
        { name: "Складання звичайного ліжка", price: "300 грн" },
        { name: "Складання ліжка з вбудованим матрацом", price: "350 грн" },
        { name: "Складання ліжка з підйомним механізмом", price: "500 грн" },
        { name: "Складання прямого дивана", price: "150 грн" },
        { name: "Складання кутового дивана", price: "200 грн" },
        { name: "Складання комода", price: "250 грн" },
        { name: "Складання приліжкової тумби", price: "150 грн" },
        { name: "Складання столу", price: "250 грн" },
      ],
    },
    {
      category: "Занесення (Є ліфт)",
      items: [
        {
          name: "Занесення однієї підйомної одиниці* ліжка (1 коробка)",
          withElevator: "Безкоштовно",
          withoutElevator: "30 грн/поверх",
        },
        {
          name: "Занесення матраца",
          withElevator: "Безкоштовно",
          withoutElevator: "30 грн/поверх",
        },
        {
          name: "Занесення каркаса ліжка (у зібраному вигляді)",
          withElevator: "Безкоштовно",
          withoutElevator: "30 грн/поверх",
        },
        {
          name: "Занесення прямого дивана**",
          withElevator: "150 грн",
          withoutElevator: "30 грн/поверх (за 1 підйомну одиницю)",
        },
        {
          name: "Занесення кутового дивана",
          withElevator: "200 грн",
          withoutElevator: "30 грн/поверх (за 1 підйомну одиницю)",
        },
        {
          name: "Занесення комода",
          withElevator: "Безкоштовно",
          withoutElevator: "50 грн",
        },
        {
          name: "Занесення тумби",
          withElevator: "Безкоштовно",
          withoutElevator: "10 грн",
        },
        {
          name: "Занесення стільця",
          withElevator: "Безкоштовно",
          withoutElevator: "15 грн",
        },
        {
          name: "Занесення столу",
          withElevator: "Безкоштовно",
          withoutElevator: "50 грн",
        },
      ],
    },
    {
      category: "Занесення (Ліфта немає/не працює/ щось не міститься)",
      items: [
        {
          name: "Занесення однієї підйомної одиниці* ліжка (1 коробка)",
          price: "30 грн/поверх",
        },
        {
          name: "Занесення матраца",
          price: "30 грн/поверх",
        },
        {
          name: "Занесення каркаса ліжка (у зібраному вигляді)",
          price: "30 грн/поверх",
        },
        {
          name: "Занесення прямого дивана**",
          price: "30 грн/поверх (за 1 підйомну одиницю)",
        },
        {
          name: "Занесення кутового дивана",
          price: "30 грн/поверх (за 1 підйомну одиницю)",
        },
        {
          name: "Занесення комода",
          price: "50 грн",
        },
        {
          name: "Занесення тумби",
          price: "10 грн",
        },
        {
          name: "Занесення стільця",
          price: "15 грн",
        },
        {
          name: "Занесення столу",
          price: "50 грн",
        },
      ],
    },
    {
      disclaimer:
        "* Занесення великогабаритних деталей, довжина яких перевищує 160*90см або вага перевищує 20кг коштує 30грн/поверх. **Занесення дивана, що складається з 1 підйомної одиниці 70 грн/поверх без ліфта. ***За відсутності вільного під'їзду до парадного, служба доставки самостійно розраховує вартість занесення до дверей.",
    },
  ];

  return (
    <section className={style.price}>
      <div className={`${containerStyle.container} ${style.price__container}`}>
        {priceData.map((section) => (
          <>
            {section.category && <h3 className={style.price__title}>{section.category}</h3>}
            {section.items && <PriceList items={section.items} />}
            {section.disclaimer && <p className={style.price__disclaimer}>{section.disclaimer}</p>}
          </>
        ))}
      </div>
    </section>
  );
};
