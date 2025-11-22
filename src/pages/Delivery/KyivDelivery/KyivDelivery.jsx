import { KyivList } from "./List/List";

import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./KyivDelivery.module.scss";

import MobileKyiv1x from "../../../images/delivery/mobile/1x/kyiv@1x.webp";
import MobileKyiv2x from "../../../images/delivery/mobile/2x/kyiv@2x.webp";

import DesktopKyiv1x from "../../../images/delivery/desktop/1x/kyiv@1x.webp";
import DesktopKyiv2x from "../../../images/delivery/desktop/2x/kyiv@2x.webp";

export const KyivDelivery = () => {
  return (
    <section className={style.kyiv}>
      <div className={`${containerStyle.container} ${style.kyiv__container}`}>
        <div className={style.kyiv__box}>
          <h3 className={style.kyiv__title}>
            Доставка по Києву та Київській області:
          </h3>
          <KyivList />
        </div>
          <img
            src={DesktopKyiv1x}
            alt="map of kyiv"
            className={style.kyiv__image}
          />
        <div className={style.kyiv__square}>
          <div className={style.kyiv__squareBox}>
            <h4 className={style.kyiv__squareTitle}>
              Доставка далі 5-ти км. від КП Києва платна та становить 16 грн. за
              1 км.
            </h4>
            <p className={style.kyiv__squareText}>
              При покупці на суму до 6000 грн. доставка по Києву оплачується
              замовником у розмірі 250 грн
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
