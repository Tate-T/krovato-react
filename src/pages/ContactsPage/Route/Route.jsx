import style from "./Route.module.scss";

export const Route = () => {
    const routes = [
        {
            id: 1,
            text: "Від ст. м. «Святошино» - маршрутне таксі № 461 виходити на зупинці «Путопровід».",
        },
        {
            id: 2,
            text: `Від ст. м. «Академмістечко» — маршрутне таксі № 56, 56Д у напрямку Кільцевої дороги, повз завод «Електронмаш», зуп. 
            {<br />} «Литвиненко-Вольгемут», минаючи поворот на Софіївську Борщагівку та Вишневе, зупинка одразу за Жулянським 
            {<br />} мостом, виходити на зупинці «Путопровід».`,
        },
        {
            id: 3,
            text: `Від ст. м. «Васильківська» — маршрутне таксі № 208, 56Д, {<br />} 904 у напрямку Кільцевої дороги, виходити на зупинці 
            {<br />} «Путопровід».`,
        },
        {
            id: 4,
            text: `Від ст. м. (Виставкового центру) — автобус 56 та маршрутне {<br />} таксі № 208, 499, 461, 904 у напрямку Кільцевої дороги, 
            {<br />} виходити на зупинці «Путепровід».`,
        },
        {
            id: 5,
            text: `Від м. Вишневе, маршрутним таксі 718, виходити на зупинці {<br />} (Путопровід).`,
        },
        {
            id: 6,
            text: `Від Севастопольської площі, маршрутне таксі 496, 499, {<br />} виходити на зупинці (Путопровід).`,
        }
    ];

    return (
        <section className={style.route}>
            <div className={style.container}>
                <h1 className={style.route__title}>
                    Як дістатися до нашої виставки «Кровато» від метро:
                </h1>
                <ul className={style.route__list}>
                    {routes.map((route, index) => (
                        <li
                            key={route.id}
                            className={style.route__item}
                            data-aos={index < 3 ? "fade-right" : "fade-left"}
                            data-aos-duration="3000"
                        >
                            <svg className={style.route__svg}>
                                <use xlinkHref="./images/symbol-defs.svg#icon-pointer"></use>
                            </svg>
                            <p className={style.route__text}>{route.text}</p>
                        </li>
                    ))}
                </ul>

                <ul className={style.route__listButton}>
                    <li className={style.route__itemButton}>
                        <a href="https://www.google.com/maps/dir//Кровато,+Изяславский+переулок,+52,+Київ,+03169/@50.3962324,30.4230726,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40d4c985b50a7e6d:0x3d3fa41b01332a2a!2m2!1d30.424114!2d50.3963197">
                            <button data-aos="zoom-in" data-aos-duration="2950" className={style.route__button}>
                                Прокласти маршрут
                                <svg className={style.route__buttonSvg}>
                                    <use xlinkHref="./images/symbol-defs.svg#icon-map"></use>
                                </svg>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
