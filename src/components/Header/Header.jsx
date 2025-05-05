import { Component } from "react";
import style from "./h.module.scss"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiSearch, FiPhone, FiMenu, FiChevronDown } from "react-icons/fi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FiHome, FiShoppingCart, FiTruck, FiMessageSquare, FiBook, FiMail } from "react-icons/fi";

class Header extends Component {
    state = { 
        languageDropdownVisible: false,
        mobileMenuVisible: false,
        additionalNumbersVisible: false,
        searchDropdownVisible: false,
        basketCount: 0,
        favoritesCount: 0
    }; 

    toggleLanguage = () => {
        this.setState(prevState => ({ 
            languageDropdownVisible: !prevState.languageDropdownVisible,
            mobileMenuVisible: false,
            additionalNumbersVisible: false,
            searchDropdownVisible: false
        }));
    };

    toggleMenu = () => {
        this.setState(prevState => ({ 
            mobileMenuVisible: !prevState.mobileMenuVisible,
            languageDropdownVisible: false,
            additionalNumbersVisible: false,
            searchDropdownVisible: false 
        }));
    };

    toggleAdditionalNumbers = () => {
        this.setState(prevState => ({ 
            additionalNumbersVisible: !prevState.additionalNumbersVisible,
            languageDropdownVisible: false,
            mobileMenuVisible: false,
            searchDropdownVisible: false
        }));
    };

    toggleSearchDropdown = () => {
        this.setState(prevState => ({ 
            searchDropdownVisible: !prevState.searchDropdownVisible,
            languageDropdownVisible: false,
            mobileMenuVisible: false,
            additionalNumbersVisible: false
        }));
    };

    // Методы рендеринга отдельных секций для лучшей читаемости
    renderDesktopTopSection = () => (
        <div className={style.header__section1}>
            <ul className={style.header__list}>
                <li className={style.header__item}>
                    <a href="./about-us.html"><FiHome size={16} /> Про нас</a>
                </li>
                <li className={style.header__item}>
                    <a href="./pay.html"><FiShoppingCart size={16} /> Оплата</a>
                </li>
                <li className={style.header__item}>
                    <a href="./delivery.html"><FiTruck size={16} /> Доставка та збірка</a>
                </li>
                <li className={style.header__item}>
                    <a href="./reviews.html"><FiMessageSquare size={16} /> Відгуки</a>
                </li>
                <li className={style.header__item}>
                    <a href="./blog-page.html"><FiBook size={16} /> Блог</a>
                </li>
                <li className={style.header__item}>
                    <a href="./contacts.html"><FiMail size={16} /> Контакти</a>
                </li>
                <li className={style["header__list-svg"]}>
                    <div className={style.header__lang_container} onClick={this.toggleLanguage}>
                        <p className={style.header__lang_text}>UA</p>
                        <FiChevronDown size={16} />
                        {this.state.languageDropdownVisible && (
                            <div className={style.header__dropdown_menu}>
                                <div>EN</div>
                                <div>UA</div>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );

    renderMobileTopSection = () => (
        <div className={style.header__mobile}>
            {/* Первая строка мобильного хедера */}
            <div className={style.header__mobile_row}>
                <div className={style.header__burger_menu} onClick={this.toggleMenu}>
                    <FiMenu size={28} />
                </div>
                <div className={style.header__logo}>
                    <a href="./index.html">
                        <img src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp" alt="Krovato" />
                    </a>
                </div>
                <div className={style.header__phone_icon} onClick={this.toggleAdditionalNumbers}>
                    <FiPhone size={28} />
                    {this.state.additionalNumbersVisible && (
                        <div className={style.mobile_phone_dropdown}>
                            <p className={style.mobile_phone_text}>Щодня з 9:00 до 18:00</p>
                            <a href="tel:+380679294545" className={style.mobile_phone_number}>067 929-45-45</a>
                            <a href="tel:+380501334545" className={style.mobile_phone_number}>050 133-45-45</a>
                            <a href="tel:+380931707545" className={style.mobile_phone_number}>093 170-75-45</a>
                            <a href="#" className={style.callback_link}>Передзвоніть мені</a>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Вторая строка мобильного хедера */}
            <div className={style.header__mobile_row}>
                <div className={style.header__catalog_btn}>
                    <a href="#" className={style.catalog_orange_btn}>Каталог</a>
                </div>
                <div className={style.header__mobile_icons}>
                    <div className={style.header__icon_btn} onClick={this.toggleSearchDropdown}>
                        <FiSearch size={24} />
                    </div>
                    <div className={style.header__icon_btn}>
                        <div className={style.icon_with_badge}>
                            <FaRegHeart size={24} />
                            {this.state.favoritesCount > 0 && (
                                <span className={style.badge}>{this.state.favoritesCount}</span>
                            )}
                        </div>
                    </div>
                    <div className={style.header__icon_btn}>
                        <div className={style.icon_with_badge}>
                            <HiOutlineShoppingBag size={24} />
                            {this.state.basketCount > 0 && (
                                <span className={style.badge}>{this.state.basketCount}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderMiddleSection = () => (
        <div className={style.header__list2}>
            {/* 1. Логотип */}
            <div className={style.header__item}>
                <a className={style.header__logo_link} href="./index.html">
                    <div className={style.header__logo}>
                        <img src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp" alt="Krovato" />
                    </div>
                </a>
            </div>
            
            {/* 2. Поле поиска */}
            <div className={style.header__form_box}>
                <form className={style.header__form}>
                    <input className={style.header__find} type="text" placeholder="Я шукаю..." />
                    <button type="submit" className={style.search_button}>
                        <FiSearch className={style.search__svg} size={24} />
                    </button>
                </form>
            </div>
            
            {/* 3. Блок с номерами телефонов */}
            <div className={style.header__item} style={{ display: 'flex', alignItems: 'center' }}>
                <FiPhone className={style.phone_icon} size={24} />
                <div className={style.phone_info}>
                    <p className={style.header__paragraph}>Щодня з 9:00 до 18:00</p>
                    <h4 className={style.header__number}>067 929-45-45</h4>
                </div>
                <FiChevronDown 
                    className={style.dropdown_icon} 
                    onClick={this.toggleAdditionalNumbers}
                    size={24}
                />
                {this.state.additionalNumbersVisible && (
                    <div className={style.header__dropdown_menu_box}>
                        <div className={style.header__dropdown_menu}>
                            <p className={style.header__paragraph_drop}>Щодня з 9:00 до 18:00</p>
                            <p className={style.header__number_drop}>067 929-45-45</p>
                            <p className={style.header__number_drop}>050 133-45-45</p>
                            <p className={style.header__number_drop}>093 170-75-45</p>
                            <a href="#" className={style.header__link_drop}>Передзвоніть мені</a>
                        </div>
                    </div>
                )}
            </div>

            {/* 4. Иконка избранного */}
            <div className={style.header__icon_container}>
                <div className={style.icon_with_badge}>
                    <FaHeart className={style.heart_icon} size={24} />
                    {this.state.favoritesCount > 0 && (
                        <span className={style.badge}>{this.state.favoritesCount}</span>
                    )}
                </div>
            </div>
            
            {/* 5. Иконка корзины */}
            <a href="#" className={style.header__icon_container}>
                <div className={style.icon_with_badge}>
                    <HiOutlineShoppingBag className={style.cart_icon} size={24} />
                    {this.state.basketCount > 0 && (
                        <span className={style.badge}>{this.state.basketCount}</span>
                    )}
                </div>
            </a>
        </div>
    );

    renderBottomSection = () => (
        <div className={style.header__list3}>
            <div className={style.header__item}>
                <a className={`${style.header__link} ${style.catalog_orange_btn}`} href="#">
                    Каталог
                </a>
            </div>
            <div className={style.header__item}>
                <a className={style.header__link} href="#">
                    <AiOutlineStar className={style.icon_promo} size={20} />
                    <span>Акції</span>
                </a>
            </div>
            <div className={style.header__item}>
                <a className={style.header__link} href="#">
                    <FaPercent className={style.icon_sale} size={18} />
                    <span>Розпродаж</span>
                </a>
            </div>
            <div className={style.header__item}>
                <a className={style.header__link} href="#">
                    <BsCreditCard2Front className={style.icon_credit} size={20} />
                    <span>Купити в кредит</span>
                </a>
            </div>
            <div className={style.header__button}>Передзвоніть мені</div>
        </div>
    );

    renderMobileMenu = () => (
        <>
            <div className={style.mobile_menu_list}>
                <a href="./about-us.html" className={style.mobile_menu_link}>
                    <FiHome size={24} /> Про нас
                </a>
                <a href="./pay.html" className={style.mobile_menu_link}>
                    <FiShoppingCart size={24} /> Оплата
                </a>
                <a href="./delivery.html" className={style.mobile_menu_link}>
                    <FiTruck size={24} /> Доставка та збірка
                </a>
                <a href="./reviews.html" className={style.mobile_menu_link}>
                    <FiMessageSquare size={24} /> Відгуки
                </a>
                <a href="./blog-page.html" className={style.mobile_menu_link}>
                    <FiBook size={24} /> Блог
                </a>
                <a href="./contacts.html" className={style.mobile_menu_link}>
                    <FiMail size={24} /> Контакти
                </a>
                <a href="#" className={style.mobile_menu_link}>
                    <AiOutlineStar size={24} /> Акції
                </a>
                <a href="#" className={style.mobile_menu_link}>
                    <FaPercent size={24} /> Розпродаж
                </a>
                <a href="#" className={style.mobile_menu_link}>
                    <BsCreditCard2Front size={24} /> Купити в кредит
                </a>
                <div className={style.mobile_menu_language}>
                    <span>Мова:</span>
                    <button className={`${style.lang_btn} ${style.active}`}>UA</button>
                    <button className={style.lang_btn}>EN</button>
                </div>
                <a href="#" className={style.callback_btn}>Передзвоніть мені</a>
            </div>
            <div className={style.blur_overlay} onClick={this.toggleMenu}></div>
        </>
    );

    renderMobileSearch = () => (
        <>
            <div className={style.dropdown_menu}>
                <form className={style.header__form_mobile}>
                    <input type="text" className={style.header__find_mob} placeholder="Я шукаю..." />
                    <button type="submit" className={style.mobile_search_btn}>
                        <FiSearch size={24} />
                    </button>
                </form>
            </div>
            <div className={style.blur_overlay_find} onClick={this.toggleSearchDropdown}></div>
        </>
    );

    render() { 
        return (
            <header className={style.header}>
                {/* Десктопная верхняя секция */}
                {this.renderDesktopTopSection()}
                
                {/* Мобильная верхняя секция */}
                {this.renderMobileTopSection()}
                
                {/* Средняя секция - только для десктопа */}
                <div className={style.desktop_only}>
                    {this.renderMiddleSection()}
                    {this.renderBottomSection()}
                </div>
                
                {/* Мобильное меню и поиск */}
                {this.state.mobileMenuVisible && this.renderMobileMenu()}
                {this.state.searchDropdownVisible && this.renderMobileSearch()}
            </header>
        );
    }
}

export default Header;