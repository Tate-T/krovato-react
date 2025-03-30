import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Topic.module.scss";

export const Topic = () => {
  return (
    <section className={style.topic}>
      <div className={`${containerStyle.container} ${style.topic__container}`}>
        <h2 className={style.topic__title}>Доставка та збірка</h2>
        <h3 className={style.topic__subtitle}>
          Доставка онлайн замовлень по всій Україні.
        </h3>
        <p className={style.topic__text}>
          Робимо доставку власним транспортом та в усі працюючі відділення Нової
          Пошти. Оплата доставки і збірки здійснюється в момент отримання
          товару.
        </p>
      </div>
    </section>
  );
};
