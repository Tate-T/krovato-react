import style from "./Writeus.module.scss";

export const Writeus = () => {
    return (
        <section className={style.write}>
            <div className={`${style.container} ${style.write__container}`}  data-aos="zoom-out" data-aos-duration="3500">
                <ul className={style.write__listText}>
                    <li className={style.write__itemText}>
                        <p className={style.write__one}>
                            Напишіть нам!
                        </p>
                    </li>
                    <li className={`${style.write__itemText} ${style.write__twoItem}`}>
                        <p className={style.write__two}>
                            Якщо у вас є побажання щодо якості обслуговування, 
                            пропозиції щодо партнерства, напишіть нам і наше керівництво 
                            зв'яжеться з вами!
                        </p>
                    </li>
                    <li className={style.write__itemText}>
                        <p className={style.write__three}>
                            Або чекаємо на вас у гості!
                        </p>
                    </li>
                </ul>

                <form className={style.writeForm} onSubmit={(e) => e.preventDefault()}>
                    <input className={style.write__input} type="text" placeholder="Ваше ім'я та прізвище" required />
                    <input className={style.write__input} type="email" placeholder="E-mail" required />
                    <input className={style.write__input} type="tel" placeholder="Контактний телефон" required />
                    <textarea className={`${style.write__input} ${style.write__coment}`} placeholder="Ваш коментар або питання" required></textarea>
                    <button className={style.write__button} type="submit">Відправити</button>
                </form>
            </div>
        </section>
    );
};
