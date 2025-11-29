import { useState } from 'react';
import style from "./Write.module.scss";
import containerStyle from "../../../components/Container/Container.module.scss";
import { SuccessModal } from './SuccessModal';

export const Writeus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsModalOpen(true);

        setFormData({
            name: '',
            email: '',
            phone: '',
            comment: ''
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={style.write}>
            <div className={`${containerStyle.container} ${style.write__container}`} data-aos="zoom-out" data-aos-duration="3500">
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

                <form className={style.write__form} onSubmit={handleSubmit}>
                    <input
                        className={style.write__input}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше ім'я та прізвище"
                        required
                    />
                    <input
                        className={style.write__input}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-mail"
                        required
                    />
                    <input
                        className={style.write__input}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Контактний телефон"
                        required
                    />
                    <textarea
                        className={`${style.write__input} ${style.write__coment}`}
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        placeholder="Ваш коментар або питання"
                        required
                    ></textarea>
                    <button className={style.write__button} type="submit">Відправити</button>
                </form>
            </div>

            <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};
