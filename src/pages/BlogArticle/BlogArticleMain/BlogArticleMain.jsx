import style from "./BlogArticleMain.module.scss";

export const BlogArticleMain = () => {
  return (
    <>
      <div className={style.article__align}>
        <h1 className={style.article__title}>
          Оформлення вітальні. Які м'які меблі краще вибрати?
        </h1>
      </div>
      <img
        src="./images/desktop/article@1x.webp"
        alt="кімната"
        className="article__img"
      />
      <p className={style.article__descr}>
        Вітальня – це основна кімната у кожному будинку. Саме вона служить для
        прийому гостей, проведення часу всією сім'єю та просто для відпочинку у
        приємній теплій атмосфері. Оформляючи свій будинок та вітальню зокрема,
        всі намагаються зробити її максимально зручною, комфортною та красивою.
        Основним та центральним елементом оформлення вітальні, як і будь-якої
        іншої кімнати, є м'які меблі. Будь-які меблі для вітальні повинні бути
        не тільки стильними і красивими, але і функціональними. На таких меблів
        має бути зручно та приємно відпочивати та приймати гостей. Однак
        сьогодні існує величезна різноманітність найрізноманітніших м'яких
        меблів для вітальні, яка підходить для кімнат різних розмірів і форм. На
        чому варто зупинити свій вибір? Як краще оформити свою вітальню, щоб вам
        було комфортно, а гості хотіли приходити до вас знову та знову?
      </p>
      <h2 className={style.article__subtitle}>
        На сайті інтернет магазину Кровато представлено велику різноманітність
        м'яких меблів для вітальні, серед яких кожен зможе вибрати для себе
        найбільш вдалий варіант. У нас ви знайдете:
      </h2>
    </>
  );
};
