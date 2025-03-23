import { ArticlesItem } from "./Item/Item";

export const ArticlesList = () => {
  const items = [
    {
        image: {
            src: "./images/mobile/hole-chairs@2x.webp",
            srcSet: {
                mobile: "./images/mobile/hole-chairs@1x.webp 1x, ./images/mobile/hole-chairs@2x.webp 2x",
                desktop: "./images/desktop/hole-cheirs@1x.webp 1x, ./images/desktop/hole-cheirs@2x.webp 2x",  
            },    
        },
        title: "Стільці для вітальні. Як правильно вибрати?",
    },
    {
        image: {
            src: "./images/mobile/kitchen-exaple@2x.webp",
                srcSet: {
                    mobile: "./images/mobile/kitchen-exaple@1x.webp 1x, ./images/mobile/kitchen-exaple@2x.webp 2x",
                    desktop: "./images/desktop/kitchen-exaple@1x.webp 1x, ./images/desktop/kitchen-exaple@2x.webp 2x",  
                },
            alt: "Фото стільців для кухні",
        },
        title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
    },
    {
        image: {
            src: "./images/mobile/hole-exaple@2x.webp",
                srcSet: {
                    mobile: "./images/mobile/hole-exaple@1x.webp 1x, ./images/mobile/hole-exaple@2x.webp 2x",
                    desktop: "./images/desktop/hole-exaple@1x.webp 1x, ./images/desktop/hole-exaple@2x.webp 2x",  
                },
            alt: "Фото м'яких меблів для вітальні",
        },
        title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
    },
  ];

  return (
    <ul className="articles__list">
        {items.map((item) =>
            <ArticlesItem title={item.title} src={item.image.src} alt={item.image.alt} mobileImage={item.image.srcSet.mobile} desktopImage={item.image.srcSet.desktop}/>
        )}
    </ul>
  );
};
