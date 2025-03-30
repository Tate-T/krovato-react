import style from "./Questions.module.scss";

export const QuestionItem = ({ id, question, answer }) => {
  return (
    <li data-aos-duration="2000" className={style.questions__item}>
      <div className={style.questions__box}>
        <svg className={style.questions__icon}>
          <use href="./images/symbol-defs.svg#questions-icon"></use>
        </svg>
        <label htmlFor={id} className={style.questions__subtitle}>
          {question}
        </label>
      </div>
      <input
        className={style.questions__checkbox}
        type="checkbox"
        name="questions__accordion"
        id={id}
      />
      <svg className={style.questions__subtitleButton}>
        <use href="./images/symbol-defs.svg#icon-main-hero-right"></use>
      </svg>
      <div className={style.questions__paragraph}>
        {answer.map((text, index) => (
          <div key={index} className={style.questions__textBox}>
            <p className={style.questions__text}>{text}</p>
          </div>
        ))}
      </div>
    </li>
  );
};
