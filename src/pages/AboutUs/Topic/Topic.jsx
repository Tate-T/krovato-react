import style from "./Topic.module.scss";

export const Topic = () => {
  return (
    <section className={style.topic}>
      
        <div className={style.topic__container}>
          <h1 className={style.topic__title}>Про нас</h1>
          <h2 className={style.topic__subtitle}>
            Магазин меблів для дому Krovato є дистриб'ютором високоякісних
            меблів.
          </h2>
          <p className={style.topic__text}>
            Ми працюємо тільки з провідними виробниками ліжок та матраців,
            такими як ЕММ, Estella, Метакам, Legko, HighFoam, ArborDrev.
          </p>
        </div>
      
    </section>
  );
};
