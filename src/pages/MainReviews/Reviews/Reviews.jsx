import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from "../../../thunk/reviewsThunk";
import style from './Reviews.module.scss';
import sprite from '../../../images/symbol-defs.svg';

export const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviewsThunk());
  }, [dispatch]);

  return (
    <div className={style.reviews__section}>
      <ul className={style.reviews__reviewsList}>
        {reviews.map((review, index) => (
          <li
            key={review.id}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={index % 2 === 0 ? "500" : "100"}
            className={style.reviews__reviewsItem}
          >
            <div className={style.reviews__reviewsBoxTop}>
              <div className={style.reviews__reviewsIconBox}>
                <svg className={style.reviews__reviewsIconPeople}>
                  <use href={`${sprite}#icon-avatar`}></use>
                </svg>
              </div>
              <div className={style.reviews__reviewsMobBox}>
                <p className={style.reviews__reviewsName}>{review.name}</p>
                <ul className={style.reviews__reviewsStarList}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star} className={style.reviews__reviewsStarItem}>
                      <svg className={style.reviews__reviewsStarIcon}>
                        {star <= review.rating ? (
                          <use href={`${sprite}#icon-star`}></use>
                        ) : star === Math.ceil(review.rating) && review.rating % 1 !== 0 ? (
                          <use href={`${sprite}#icon-half-star`}></use>
                        ) : (
                          <use href={`${sprite}#icon-empty-star`}></use>
                        )}
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
              <p className={style.reviews__reviewsDate}>
                {new Date(review.date).toLocaleDateString("uk-UA", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className={style.reviews__reviewsText}>{review.text}</p>
            <div className={style.reviews__reviewsBox}>
              {review.product ? (
                <>
                  <picture>
                    <source
                      srcSet="
                        ./images/reviews-page/sofa@1x.webp 1x,
                        ./images/reviews-page/sofa@2x.webp 2x
                "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcSet="
                    ./images/reviews-page/phone/sofa@1x.webp 1x,
                    ./images/reviews-page/phone/sofa@2x.webp 2x
                "
                      media="(min-width: 320px)"
                    />
                    <img
                      src="./images/reviews-page/sofa@1x.webp"
                      alt=""
                      className={style.reviews__reviewsImg}
                    />
                  </picture>
                  <a href="./catalog.html" className={style.reviews__reviewsSubtext}>
                    {review.product}
                  </a>
                </>
              ) : (
                <>
                  <div className={style.reviews__reviewsIconTextBox}>
                    <svg className={style.reviews__reviewsIcon}>
                      <use href={`${sprite}#icon-logo-sofa`}></use>
                    </svg>
                  </div>
                  <a href="./catalog.html" className={style.reviews__reviewsSubtext}>KROVATO</a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
