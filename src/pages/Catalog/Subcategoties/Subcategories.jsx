import styles from "./subcategories.module.scss";
import containerStyles from "../../../components/Container/Container.module.scss";

import arrow from "../../../images/catalog/arrow-double-up.svg";

export const Subcategories = () => {
  return (
    <section className={styles.subcategories}>
      <div className={containerStyles.container}>
        <div className={styles.subcategories__main}>
          <h2 className={styles.subcategories__title}>Ліжка</h2>
          <h3 className={styles.subcategories__subtitle}>1147 товарів</h3>
        </div>

        <ul className={styles.subcategories__list}>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Односпальні ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Двоспальні ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Диван-ліжко</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Дерев'яні ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Металеві ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>М'які ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Ліжка подіуми</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Дитячі ліжка</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Ліжка з підйомним механізмом</p>
          </li>
          <li className={styles.subcategories__item}>
            <p className={styles.subcategories__text}>Акційні ліжка</p>
          </li>
        </ul>
        <div className={styles.subcategories__box}>
          <a href="#" className={styles.subcategories__hide}>
            Приховати підкатегорїї
          </a>
          <svg className={styles.subcategories__icon} fill="#000">
            <use href={[arrow, "#arrow"].join("")}></use>
          </svg>
        </div>
      </div>
    </section>
  );
};
