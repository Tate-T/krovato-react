import { Fragment } from 'react';

import { PriceList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Price.module.scss";

export const Price = () => {
  const priceData = [
    {
      category: "Складання",
      hasTableHeaders: false,
      items: [
        { id: "drafting-1", name: "Складання звичайного ліжка", price: "300 грн" },
        { id: "drafting-2", name: "Складання ліжка з вбудованим матрацом", price: "350 грн" },
        { id: "drafting-3", name: "Складання ліжка з підйомним механізмом", price: "500 грн" },
        { id: "drafting-4", name: "Складання прямого дивана", price: "150 грн" },
        { id: "drafting-5", name: "Складання кутового дивана", price: "200 грн" },
        { id: "drafting-6", name: "Складання комода", price: "250 грн" },
        { id: "drafting-7", name: "Складання приліжкової тумби", price: "150 грн" },
        { id: "drafting-8", name: "Складання столу", price: "250 грн" },
      ],
    },
    {
      category: "Занесення",
      hasTableHeaders: true,
      items: [
        {
          id: "entry-1",
          name: "Занесення однієї підйомної одиниці* ліжка (1 коробка)",
          withElevator: "Безкоштовно",
          withoutElevator: "30 приймають",
        },
        {
          id: "entry-2",
          name: "Занесення матраца",
          withElevator: "Безкоштовно",
          withoutElevator: "30 приймають",
        },
        {
          id: "entry-3",
          name: "Занесення каркаса ліжка (у зібраному вигляді)",
          withElevator: "Безкоштовно",
          withoutElevator: "30 приймають",
        },
        {
          id: "entry-4",
          name: "Занесення прямого дивана**",
          withElevator: "150 грн",
          withoutElevator: "30 приймають (за підйомну організацію)",
        },
        {
          id: "entry-5",
          name: "Занесення кутового дивана",
          withElevator: "200 грн",
          withoutElevator: "30 приймають (за підйомну організацію)",
        },
        {
          id: "entry-6",
          name: "Занесення комода",
          withElevator: "Безкоштовно",
          withoutElevator: "50 грн",
        },
        {
          id: "entry-7",
          name: "Занесення тумби",
          withElevator: "Безкоштовно",
          withoutElevator: "10 грн",
        },
        {
          id: "entry-8",
          name: "Занесення стільця",
          withElevator: "Безкоштовно",
          withoutElevator: "15 грн",
        },
        {
          id: "entry-9",
          name: "Занесення столу",
          withElevator: "Безкоштовно",
          withoutElevator: "50 грн",
        },
      ],
    },
    {
      disclaimer: "*Занесення магометоборотних деталей, дизелями яких перевищує 100%сильово для перевищує 20м³ і мають 50 приймають. **Занесення дивана, що складається в 1 підйомної організації 70 приймають без ліфта. ***Під заслоненням кількістю таблиць до переваги, служба доставки самостійно розвивають вартість занесення до дивана.",
    },
  ];

  return (
    <section className={style.price}>
      <div className={`${containerStyle.container} ${style.price__container}`}>
        {priceData.map((section, index) => (
          <Fragment key={index}>
            {section.category && <h3 className={style.price__title}>{section.category}</h3>}
            {section.items && <PriceList items={section.items} hasTableHandlers={section.hasTableHeaders} />}
            {section.disclaimer && <p className={style.price__disclaimer}>{section.disclaimer}</p>}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
