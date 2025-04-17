import style from "../../KyivDelivery.module.scss";

export const KyivItem = ({ id, hasIcon, text }) => {
  return (
    <li key={id} className={style.kyiv__item}>
      {hasIcon && (
        <svg
          className={style.kyiv__icon}
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_203_7404)">
            <path
              d="M35 0C15.6692 0 0 15.6692 0 35C0 54.3308 15.6692 70 35 70C54.3308 70 70 54.3308 70 35C70 15.6692 54.3308 0 35 0ZM35 64.5312C18.6899 64.5312 5.46875 51.3101 5.46875 35C5.46875 18.6899 18.6899 5.46875 35 5.46875C51.3101 5.46875 64.5312 18.6899 64.5312 35C64.5312 51.3101 51.3101 64.5312 35 64.5312Z"
              fill="#FFBC57"
            />
            <path
              d="M35 17.5C25.3356 17.5 17.5 25.3356 17.5 35C17.5 44.6644 25.3356 52.5 35 52.5C44.6644 52.5 52.5 44.6644 52.5 35C52.5 25.3356 44.6644 17.5 35 17.5ZM32.8125 43.75L26.25 37.1875L29.3122 33.6883L32.8125 37.1875L42.6562 26.25L45.9375 29.7492L32.8125 43.75Z"
              fill="#FFBC57"
            />
          </g>
          <defs>
            <clipPath id="clip0_203_7404">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <p className={style.kyiv__text}>{text}</p>
    </li>
  );
};
