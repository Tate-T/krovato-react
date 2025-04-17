import { SharesList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Shares.module.scss";

export const Shares = () => {
  return (
    <section className={style.shares}>
      <div className={`${containerStyle.container} ${style.shares__container}`}>
        <h3 className={style.shares__title}>Акції доставки</h3>
        <SharesList />
        <p className={style.shares__disclaimer}>
          * Під покупкою ліжка з матрацом до суми "N" - мається на увазі ціна за
          матрац. ** Занесення відбувається ліфтом (по сходах занесення платне)
          * В акції не беруть участь ліжка з вбудованим матрацом. * Знижка на
          матраци ТМ Сонлайн не сумується з іншими акціями.
        </p>
      </div>
    </section>
  );
};
