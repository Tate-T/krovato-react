import { KyivList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./KyivDelivery.module.scss";

export const KyivDelivery = () => {
  return (
    <section className={style.kyiv}>
      <div className={`${containerStyle.container} ${style.kyiv__container}`}>
        <div className={style.kyiv__box}>
          <h3 className={style.kyiv__title}>Доставка по Києву та Київській області:</h3>
          <KyivList />
        </div>
        <picture>
          <source
            srcSet="
          ./images/desktop/kyiv@1x.webp 1x,
          ./images/desktop/kyiv@2x.webp 2x
        "
            media="(min-width: 768px)"
          />
          <source
            srcSet="
          ./images/mobile/kyiv@1x.webp 1x,
          ./images/mobile/kyiv@2x.webp 2x
        "
            media="(min-width: 320px)"
          />
          <img
            src="./images/desktop/kyiv@1x.webp"
            alt="map of kyiv"
            className={style.kyiv__image}
          />
        </picture>
        <div className={style.kyiv__square}>
          <h4 className={style.kyiv__squareTitle}>
            Доставка далі 5-ти км. від КП Києва платна та становить 16 грн. за 1
            км.
          </h4>
          <p className={style.kyiv__squareText}>
            При покупці на суму до 6000 грн. доставка по Києву оплачується
            замовником у розмірі 250 грн
          </p>
        </div>
      </div>
    </section>
  );
};
