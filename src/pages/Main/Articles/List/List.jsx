import { ArticlesItem } from "./Item/Item";

import style from "../Articles.module.scss";

import MobileHoleChairs1x from "../../../../images/main/mobile/1x/hole-chairs@1x.webp";
import MobileHoleChairs2x from "../../../../images/main/mobile/2x/hole-chairs@2x.webp";

import DesktopHoleChairs1x from "../../../../images/main/desktop/1x/hole-chairs@1x.webp";
import DesktopHoleChairs2x from "../../../../images/main/desktop/2x/hole-chairs@2x.webp";

import MobileKitchenExample1x from "../../../../images/main/mobile/1x/kitchen-example@1x.webp";
import MobileKitchenExample2x from "../../../../images/main/mobile/2x/kitchen-example@2x.webp";

import DesktopKitchenExample1x from "../../../../images/main/desktop/1x/kitchen-example@1x.webp";
import DesktopKitchenExample2x from "../../../../images/main/desktop/2x/kitchen-example@2x.webp";

import MobileHoleExample1x from "../../../../images/main/mobile/1x/hole-example@1x.webp";
import MobileHoleExample2x from "../../../../images/main/mobile/2x/hole-example@2x.webp";

import DesktopHoleExample1x from "../../../../images/main/desktop/1x/hole-example@1x.webp";
import DesktopHoleExample2x from "../../../../images/main/desktop/2x/hole-example@2x.webp";

export const ArticlesList = () => {
  const items = [
    {
        key: "article1",
        image: {
            src: `${MobileHoleChairs1x}`,
            srcSet: {
                mobile: `${MobileHoleChairs1x}, ${MobileHoleChairs2x}`,
                desktop: `${DesktopHoleChairs1x}, ${DesktopHoleChairs2x}`,  
            },    
        },
        title: "Стільці для вітальні. Як правильно вибрати?",
    },
    {
        key: "article2",
        image: {
            src: `${MobileKitchenExample1x}`,
                srcSet: {
                    mobile: `${MobileKitchenExample1x}, ${MobileKitchenExample2x}`,
                    desktop: `${DesktopKitchenExample1x}, ${DesktopKitchenExample2x}`,
                },
            alt: "Фото стільців для кухні",
        },
        title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
    },
    {
        key: "article3",
        image: {
            src: `${MobileHoleExample1x}`,
                srcSet: {
                    mobile: `${MobileHoleExample1x}, ${MobileHoleExample2x}`,
                    desktop: `${DesktopHoleExample1x}, ${DesktopHoleExample2x}`,
                },
            alt: "Фото м'яких меблів для вітальні",
        },
        title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
    },
  ];

  return (
    <ul className={style.articles__list}>
        {items.map((item) =>
            <ArticlesItem key={item.key} title={item.title} src={item.image.src} alt={item.image.alt} mobileImage={item.image.srcSet.mobile} desktopImage={item.image.srcSet.desktop}/>
        )}
    </ul>
  );
};
