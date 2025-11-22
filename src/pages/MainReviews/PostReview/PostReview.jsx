import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviewThunk, getReviewsThunk } from "../../../thunk/reviewsThunk";
import style from './PostReview.module.scss';
import sprite from '../../../images/symbol-defs.svg';

export const PostReview = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.text && formData.rating > 0) {
      const reviewData = {
        ...formData,
        date: new Date().toISOString(),
        likes: 0,
        product: "",
      };
      await dispatch(addReviewThunk(reviewData));
      setFormData({
        name: "",
        email: "",
        text: "",
        rating: 0,
      });
      dispatch(getReviewsThunk());
    }
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <div className={style.reviews__form}>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formTopBox}>
        <div className={style.reviews__formIconBox}>
          <svg className={style.reviews__formIcon}>
            <use href={`${sprite}#icon-logo-sofa`}></use>
          </svg>
        </div>
        <div>
          <p className={style.reviews__formTitle}>Магазин меблів для дому «KROVATO»</p>
          <div className={style.reviews__formTopStarBox}>
            <p className={style.reviews__formTopStarText}>{averageRating}</p>
            <ul className={style.reviews__formTopStarList}>
              {[1, 2, 3, 4, 5].map((star) => (
                <li key={star} className={style.reviews__formTopStarItem}>
                  <svg className={style.reviews__formTopStarIcon}>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          <p className={style.reviews__formText}>Базовано на відгуках: {reviews.length}</p>
        </div>
      </div>
      <form id="mob-reviews" className={style.reviews__formForm} onSubmit={handleSubmit}>
        <h4 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormTitle}>
          Залишіть свій відгук про магазин
        </h4>
        <ul data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormList}>
          <li className={style.reviews__formFormItem}>
            <input
              className={style.reviews__formInput}
              placeholder="Ваше ім'я прізвище"
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </li>
          <li className={style.reviews__formFormItem}>
            <input
              className={style.reviews__formInput}
              placeholder="E-mail"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </li>
          <li className={style.reviews__formFormItem}>
            <input
              className={`${style.reviews__formInput} ${style.reviews__thirdInput}`}
              placeholder="Відгук"
              type="text"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              required
            />
          </li>
        </ul>
        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormRating}>Ваша оцінка:</p>
        <ul data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formList}>
          {[1, 2, 3, 4, 5].map((star) => (
            <li key={star} className={style.reviews__formItem}>
              <button
                type="button"
                onClick={() => handleRatingChange(star)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <svg className={style.reviews__formStarIcon}>
                  {star <= formData.rating ? (
                    <use href={`${sprite}#icon-star`}></use>
                  ) : (
                    <use href={`${sprite}#icon-empty-star`}></use>
                  )}
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className={style.reviews__formFormButton} type="submit">
          Залишити відгук
        </button>
      </form>
    </div>
  );
};
