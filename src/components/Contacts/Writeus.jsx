export const Writeus = () => {
    return (
        <section className="write">
            <div className="container write__container" data-aos="zoom-out" data-aos-duration="3500">
                <ul className="write__list-text">
                    <li className="write__item-text">
                        <p className="write__one">
                            Напишіть нам!
                        </p>
                    </li>
                    <li className="write__item-text write__two-item">
                        <p className="write__two">
                            Якщо у вас є побажання щодо якості обслуговування, 
                            пропозиції щодо партнерства, напишіть нам і наше керівництво 
                            зв'яжеться з вами!
                        </p>
                    </li>
                    <li className="write__item-text">
                        <p className="write__three">
                            Або чекаємо на вас у гості!
                        </p>
                    </li>
                </ul>

                <form className="write__form" onSubmit={(e) => e.preventDefault()}>
                    <input className="write__input" type="text" placeholder="Ваше ім'я та прізвище" required />
                    <input className="write__input" type="email" placeholder="E-mail" required />
                    <input className="write__input" type="tel" placeholder="Контактний телефон" required />
                    <textarea className="write__input write__coment" placeholder="Ваш коментар або питання" required></textarea>
                    <button className="write__button" type="submit">Відправити</button>
                </form>
            </div>
        </section>
    );
};
