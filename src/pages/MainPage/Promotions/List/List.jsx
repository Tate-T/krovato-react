// import { PromotionsItem } from "./Item/Item";

// import style from "../Promotions.module.scss";

// export const PromotionsList = ({ data, activeSlide }) => {

//   return (
//     <ul className={style.promotions__list}>
//       {data.map((item) => {

//         return (
//           <PromotionsItem
//             key={item.id}
//             src={item.photo}
//             alt={item.name}
//             activeSlide={activeSlide}
//           />
//         );
//       })}
//     </ul>
//   );
// };

import { PromotionsItem } from "./Item/Item";
import style from "../Promotions.module.scss";

export const PromotionsList = ({ data, activeSlide, visibleSlides }) => {
  return (
    <div className={style.promotions__sliderWrapper}>
      <ul
        className={style.promotions__list}
        style={{
          transform: `translateX(-${activeSlide * (100 / visibleSlides)}%)`,
        }}
      >
        {data.map((item) => (
          <PromotionsItem key={item.id} src={item.photo} alt={item.name} />
        ))}
      </ul>
    </div>
  );
};
