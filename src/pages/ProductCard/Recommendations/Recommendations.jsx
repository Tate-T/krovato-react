import style from "./Recommendations.module.scss";
import containerStyle from "../../../components/Container/Container.module.scss";

import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recommentedProductThunk } from "../../../thunk/recommendedProductsThunk";
import { addFavoriteProductThunk } from "../../../thunk/addFavoriteProductThunk";
const Recommendations = () => {
  const recommendedProduct = useSelector((state) => state.reccomendetion.recommendedProduct);
  const favoriteProducts = useSelector( state => state.favorite.favoriteProducts)
  const isFavorite = (productTitle) => {
    if (!Array.isArray(favoriteProducts)) return false;
     return favoriteProducts.some((item) => item.title === productTitle);
  };
  function toggleFavorite({id,title, alt, width,height,length, inStock, price, src, oldPrice,}) {
    const alreadyFavorite = isFavorite(title);
    if (alreadyFavorite) {
      alert("Товар вже додано. Щоб видалити зайдіть в ваш список")
      return
    } else {
      return dispatch(addFavoriteProductThunk({ id, title, alt, width, height, length, inStock, price, imageSrc: src, oldPrice }));
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recommentedProductThunk());
  }, []);
  return (
    <section className={style.recommendations}>
      <div className={containerStyle.container}>
        <h2 className={style.recommendations__title}>Рекомендовані товари</h2>
        <ul className={style.recommendations__list}>
          {recommendedProduct.map((product, indx) => {
              let favorite = isFavorite(product.title)
            return (
              <li className={style.recommendations__item} key={indx}>
                <img
                  className={style.recommendations__img}
                  src={product.imageSrc}
                  alt={product.alt}
                />
                <p className={style.recommendations__size}>
                  Розмір: {product.size.height} x {product.size.width} x {product.size.length}
                </p>
                <p className={style.recommendations__text}>{product.title}</p>
                <div className={style.recommendations__activeFlex}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                      fill="#82B09D"
                    />
                  </svg>
                  <p className={style.recommendations__active}>{product.inStock? "В наявності": "Немає в наявності"}</p>
                </div>
                <div className={style.recommendations__itemFooter}>
                    <div className={style.recommendations__costFlex}>
                        <p className={style.recommendations__nonCost}>{product.oldPrice? `${product.oldPrice} грн ` : ""}</p>
                        <p className={style.recommendations__cost}>{product.price} грн</p>
                    </div>

                  <div className={style.recommendations__obraneBc}>
                    <button 
                    title={favorite ? "Видалити з обраних" : "Добавити в обране"} 
                    onClick={(e) => {e.stopPropagation(); toggleFavorite({id:product.id,title:product.title,alt:product.alt,width:product.size.width,height:product.size.height,length:product.size.length,inStock:product.inStock,price: product.price,src:product.imageSrc,oldPrice:product.oldPrice,})}}
                    >
                      <svg
                        className={style.recommendations__obraneSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_6599_4794)">
                          <circle cx="25" cy="25" r="25" fill={favorite ? "#FFBC57" : "#F8F8F8"} />
                          <path
                            d="M35.5632 16.4365C34.1886 15.0584 32.3666 14.2173 30.4262 14.0651C28.4857 13.913 26.5549 14.4597 24.9823 15.6067C23.3325 14.3795 21.279 13.8231 19.2353 14.0494C17.1917 14.2757 15.3097 15.268 13.9683 16.8263C12.6269 18.3847 11.9259 20.3934 12.0062 22.4479C12.0866 24.5025 12.9424 26.4503 14.4014 27.8991L22.4538 35.9645C23.1281 36.6281 24.0362 37 24.9823 37C25.9284 37 26.8365 36.6281 27.5108 35.9645L35.5632 27.8991C37.0771 26.3759 37.9269 24.3155 37.9269 22.1678C37.9269 20.0202 37.0771 17.9598 35.5632 16.4365ZM33.7348 26.1097L25.6825 34.1621C25.5909 34.2546 25.4818 34.3281 25.3616 34.3782C25.2414 34.4283 25.1125 34.4541 24.9823 34.4541C24.8521 34.4541 24.7232 34.4283 24.603 34.3782C24.4828 34.3281 24.3737 34.2546 24.2821 34.1621L16.2297 26.0708C15.2128 25.0313 14.6434 23.635 14.6434 22.1808C14.6434 20.7266 15.2128 19.3303 16.2297 18.2908C17.266 17.2677 18.6636 16.694 20.1198 16.694C21.576 16.694 22.9735 17.2677 24.0098 18.2908C24.1303 18.4123 24.2737 18.5088 24.4318 18.5746C24.5898 18.6405 24.7593 18.6743 24.9304 18.6743C25.1016 18.6743 25.2711 18.6405 25.4291 18.5746C25.5871 18.5088 25.7305 18.4123 25.8511 18.2908C26.8873 17.2677 28.2849 16.694 29.7411 16.694C31.1973 16.694 32.5949 17.2677 33.6311 18.2908C34.662 19.3167 35.2501 20.7054 35.2695 22.1597C35.2889 23.6139 34.738 25.0178 33.7348 26.0708V26.1097Z"
                            fill={favorite ? "#ffffff" : "#B1B1B1"}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_6599_4794">
                            <rect width="50" height="50" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <div className={style.recommendations__koshykBc}>
                    <button>
                      <svg
                        className={style.recommendations__koshykSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_6599_2933)">
                          <circle cx="25" cy="25" r="25" fill="#FFBC57" />
                          <path
                            d="M27.9969 33.0163C28.3296 33.0163 28.6487 32.885 28.884 32.6514C29.1192 32.4177 29.2514 32.1008 29.2514 31.7704V29.2786C29.2514 28.9481 29.1192 28.6312 28.884 28.3976C28.6487 28.1639 28.3296 28.0327 27.9969 28.0327C27.6642 28.0327 27.3451 28.1639 27.1098 28.3976C26.8746 28.6312 26.7424 28.9481 26.7424 29.2786V31.7704C26.7424 32.1008 26.8746 32.4177 27.1098 32.6514C27.3451 32.885 27.6642 33.0163 27.9969 33.0163ZM22.9789 33.0163C23.3116 33.0163 23.6307 32.885 23.8659 32.6514C24.1012 32.4177 24.2334 32.1008 24.2334 31.7704V29.2786C24.2334 28.9481 24.1012 28.6312 23.8659 28.3976C23.6307 28.1639 23.3116 28.0327 22.9789 28.0327C22.6461 28.0327 22.3271 28.1639 22.0918 28.3976C21.8565 28.6312 21.7243 28.9481 21.7243 29.2786V31.7704C21.7243 32.1008 21.8565 32.4177 22.0918 32.6514C22.3271 32.885 22.6461 33.0163 22.9789 33.0163ZM34.2695 18.0654H32.5382L30.3679 13.767C30.3016 13.6088 30.2032 13.4659 30.0787 13.3472C29.9543 13.2286 29.8066 13.1367 29.6447 13.0773C29.4829 13.0179 29.3105 12.9923 29.1383 13.002C28.9661 13.0118 28.7977 13.0567 28.6438 13.134C28.4898 13.2114 28.3536 13.3194 28.2435 13.4513C28.1335 13.5833 28.0521 13.7364 28.0043 13.901C27.9566 14.0656 27.9435 14.2383 27.966 14.4082C27.9885 14.578 28.046 14.7415 28.1349 14.8883L29.7281 18.0654H21.2476L22.8409 14.8883C22.9626 14.5979 22.9693 14.2725 22.8595 13.9774C22.7496 13.6823 22.5315 13.4394 22.2488 13.2975C21.9661 13.1555 21.6398 13.125 21.3355 13.2121C21.0311 13.2992 20.7711 13.4974 20.6078 13.767L18.4375 18.0654H16.7063C15.8196 18.0787 14.9661 18.4027 14.2965 18.98C13.6268 19.5574 13.1839 20.351 13.0459 21.221C12.9079 22.091 13.0836 22.9815 13.5422 23.7353C14.0007 24.4892 14.7125 25.058 15.5522 25.3415L16.4805 34.636C16.5741 35.5612 17.0116 36.4185 17.7075 37.0405C18.4034 37.6625 19.3078 38.0046 20.244 38H30.7568C31.6931 38.0046 32.5974 37.6625 33.2934 37.0405C33.9893 36.4185 34.4267 35.5612 34.5204 34.636L35.4487 25.3415C36.2901 25.0572 37.0031 24.4862 37.4613 23.7299C37.9195 22.9735 38.0934 22.0805 37.9522 21.209C37.8109 20.3375 37.3637 19.5437 36.6896 18.9684C36.0156 18.393 35.1582 18.0731 34.2695 18.0654ZM31.9988 34.3868C31.9676 34.6952 31.8218 34.981 31.5898 35.1883C31.3578 35.3957 31.0564 35.5097 30.7443 35.5081H20.2315C19.9194 35.5097 19.6179 35.3957 19.386 35.1883C19.154 34.981 19.0082 34.6952 18.977 34.3868L18.0863 25.5408H32.8895L31.9988 34.3868ZM34.2695 23.049H16.7063C16.3736 23.049 16.0545 22.9177 15.8192 22.6841C15.584 22.4504 15.4518 22.1335 15.4518 21.8031C15.4518 21.4727 15.584 21.1558 15.8192 20.9221C16.0545 20.6884 16.3736 20.5572 16.7063 20.5572H34.2695C34.6022 20.5572 34.9213 20.6884 35.1565 20.9221C35.3918 21.1558 35.524 21.4727 35.524 21.8031C35.524 22.1335 35.3918 22.4504 35.1565 22.6841C34.9213 22.9177 34.6022 23.049 34.2695 23.049Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_6599_2933">
                            <rect width="50" height="50" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Recommendations;
