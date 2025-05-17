import style from '../ProductCard/Addition/Addition.module.scss';

const BasketProduct = () => {
  const itemBlocks = document.querySelectorAll(`.${style.addition__item}`);

  itemBlocks.forEach((block) => {
    const image = block.querySelector('img');
    const btnBasket = block.querySelector(`.${style.addition__obraneBc} button`);

    if (image && btnBasket) {
      console.log("Фото:", image.src);
      console.log("Кнопка:", btnBasket);

      btnBasket.addEventListener("click", (e) => {
        console.log("Клікнуто:", e.currentTarget);
        console.log("Зображення:", image.src);
      });
    }
  });
};

export default BasketProduct;
