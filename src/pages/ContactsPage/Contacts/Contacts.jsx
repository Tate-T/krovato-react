import style from "./Contacts.module.scss"

export const Contacts = () => {
    return (
        <section className={style.contact}>
            <div className={style.contact__container}>
                <h1 className={style.contact__title}>Контакти</h1>
                <ul className={style.contact__list}>
                    <li className={style.contact__item} key="phone">
                        <div className={style.contact__boxSvg}>
                            <svg className={style.contact__svg}>
                                <use xlinkHref="/images/symbol-defs.svg#icon-tel"></use>
                            </svg>
                            <h3 className={style.contact__name}>Телефони:</h3>
                            <div className={style.contact__boxText}>
                                <a className={style.contact__link} href="tel:+380679294545">+38 067 929-45-45</a>
                                <a className={style.contact__link} href="tel:+380501334545">+38 050 133-45-45</a>
                                <a className={style.contact__link} href="tel:+380931707545">+38 093 170-75-45</a>
                            </div>
                        </div>
                    </li>
                    <li className={style.contact__item} key="email">
                        <div className={style.contact__boxSvg}>
                            <svg className={style.contact__svg}>
                                <use xlinkHref="/images/symbol-defs.svg#icon-mail"></use>
                            </svg>
                            <h3 className={style.contact__name}>Напишіть нам:</h3>
                            <div className={style.contact__boxText}>
                                <a className={style.contact__link} href="mailto:info.krovato@gmail.com">info.krovato@gmail.com</a>
                            </div>
                        </div>
                        <div className={style.contact__boxLink}>
                            {["whatsap", "telegram", "viber", "facebook", "instagram"].map((icon) => (
                                <svg key={icon} className={style.contact__svgLink}>
                                    <use xlinkHref={`/images/symbol-defs.svg#icon-${icon}`}></use>
                                </svg>
                            ))}
                        </div>
                    </li>
                    <li className={style.contact__item} key="address">
                        <div className={style.contact__boxSvg}>
                            <svg className={style.contact__svg}>
                                <use xlinkHref="/images/symbol-defs.svg#icon-adressa"></use>
                            </svg>
                            <h3 className={style.contact__name}>Де ми знаходимось:</h3>
                            <div className={style.contact__boxText}>
                                <p className={style.contact__text}>м. Київ, провулок Ізяславський 52, пов. 2</p>
                            </div>
                        </div>
                    </li>
                    <li className={style.contact__item} key="schedule">
                        <div className={style.contact__boxSvg}>
                            <svg className={style.contact__svg}>
                                <use xlinkHref="/images/symbol-defs.svg#icon-calendars"></use>
                            </svg>
                            <h3 className={style.contact__name}>Графік роботи:</h3>
                            <div className={style.contact__boxText}>
                                <p className={style.contact__text}>Працюємо щодня <br /> з 9:00 до 18:00</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={style.contact__listMap}>
                    <li className={style.contact__itemMap} key="map">
                        <img 
                            data-aos="zoom-in-up" 
                            data-aos-duration="3000" 
                            className={style.contact__img} 
                            src="/images/contacts-page/office-img@1x.webp" 
                            alt="Офіс"
                        />
                        <iframe 
                            data-aos="zoom-in-up" 
                            data-aos-duration="3000" 
                            className={style.contact__map} 
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
