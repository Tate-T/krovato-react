export const Contacts = () => {
    return (
        <section className="contact">
            <div className="container contact__container">
                <h1 className="contact__title">Контакти</h1>
                <ul className="contact__list">
                    <li className="contact__item" key="phone">
                        <div className="contact__box-svg">
                            <svg className="contact__svg">
                                <use xlinkHref="/images/symbol-defs.svg#icon-tel"></use>
                            </svg>
                            <h3 className="contact__name">Телефони:</h3>
                            <div className="contact__box-text">
                                <a className="contact__link" href="tel:+380679294545">+38 067 929-45-45</a>
                                <a className="contact__link" href="tel:+380501334545">+38 050 133-45-45</a>
                                <a className="contact__link" href="tel:+380931707545">+38 093 170-75-45</a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item" key="email">
                        <div className="contact__box-svg">
                            <svg className="contact__svg">
                                <use xlinkHref="/images/symbol-defs.svg#icon-mail"></use>
                            </svg>
                            <h3 className="contact__name">Напишіть нам:</h3>
                            <div className="contact__box-text">
                                <a className="contact__link" href="mailto:info.krovato@gmail.com">info.krovato@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact__box-link">
                            {["whatsap", "telegram", "viber", "facebook", "instagram"].map((icon) => (
                                <svg key={icon} className="contact__svg-link">
                                    <use xlinkHref={`/images/symbol-defs.svg#icon-${icon}`}></use>
                                </svg>
                            ))}
                        </div>
                    </li>
                    <li className="contact__item" key="address">
                        <div className="contact__box-svg">
                            <svg className="contact__svg">
                                <use xlinkHref="/images/symbol-defs.svg#icon-adressa"></use>
                            </svg>
                            <h3 className="contact__name">Де ми знаходимось:</h3>
                            <div className="contact__box-text">
                                <p className="contact__text">м. Київ, провулок Ізяславський 52, пов. 2</p>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item" key="schedule">
                        <div className="contact__box-svg">
                            <svg className="contact__svg">
                                <use xlinkHref="/images/symbol-defs.svg#icon-calendars"></use>
                            </svg>
                            <h3 className="contact__name">Графік роботи:</h3>
                            <div className="contact__box-text">
                                <p className="contact__text">Працюємо щодня <br /> з 9:00 до 18:00</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="contact__list-map">
                    <li className="contact__item-map" key="map">
                        <img 
                            data-aos="zoom-in-up" 
                            data-aos-duration="3000" 
                            className="contact__img" 
                            src="/images/contacts-page/office-img@1x.webp" 
                            alt="Офіс"
                        />
                        <iframe 
                            data-aos="zoom-in-up" 
                            data-aos-duration="3000" 
                            className="contact__map" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174.7795919311427!2d30.42354827749683!3d50.39595743383892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c985b50a7e6d%3A0x3d3fa41b01332a2a!2z0JrRgNC-0LLQsNGC0L4!5e0!3m2!1sru!2sua!4v1711742065239!5m2!1sru!2sua" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="Google Maps"
                        ></iframe>
                    </li>
                </ul>
            </div>
        </section>  
    );
};
