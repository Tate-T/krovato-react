import React, { Component } from "react";
import c from "../../components/Container/Container.module.scss";

import style from "./h.module.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiPhone, FiMenu, FiChevronDown } from "react-icons/fi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FiHome, FiShoppingCart, FiTruck, FiMessageSquare, FiBook, FiMail } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './body-padding-top.css';
import { FaHeart } from "react-icons/fa";
import { CartModal } from "../BasketModal/BasketModal";
import bm from '../BasketModal/BasketModal.module.scss';



export class Header extends Component {
    state = { 
        languageDropdownVisible: false,
        mobileMenuVisible: false,
        additionalNumbersVisible: false,
        searchDropdownVisible: false
    }; 

    cartModalRef = React.createRef();

    componentDidMount() {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
            offset: 120,
            easing: 'ease-out-sine',
            delay: 50,
            anchorPlacement: 'top-center',
            disable: 'mobile',
            startEvent: 'DOMContentLoaded',
            disableMutationObserver: false,
            throttleDelay: 99,
            debounceDelay: 50,
            useClassNames: true,
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate'
        });

        window.addEventListener('load', () => {
            AOS.refresh();
        });

        window.addEventListener('resize', this.handleResize);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    languageRef = React.createRef();
    mobileMenuRef = React.createRef();
    additionalNumbersRef = React.createRef();
    searchRef = React.createRef();

    handleClickOutside = (event) => {
        if (this.state.languageDropdownVisible && 
            this.languageRef.current && 
            !this.languageRef.current.contains(event.target)) {
            this.setState({ languageDropdownVisible: false });
        }
        
        if (this.state.additionalNumbersVisible && 
            this.additionalNumbersRef.current && 
            !this.additionalNumbersRef.current.contains(event.target)) {
            this.setState({ additionalNumbersVisible: false });
        }
    }

    handleResize = () => {
        setTimeout(() => {
            AOS.refresh();
        }, 200);
    };

    toggleLanguage = (e) => {
        e.stopPropagation();
        this.setState(prevState => ({ 
            languageDropdownVisible: !prevState.languageDropdownVisible,
            mobileMenuVisible: false,
            additionalNumbersVisible: false,
            searchDropdownVisible: false
        }));
    };

    toggleMenu = (e) => {
        e.stopPropagation();
        this.setState(prevState => ({ 
            mobileMenuVisible: !prevState.mobileMenuVisible,
            languageDropdownVisible: false,
            additionalNumbersVisible: false,
            searchDropdownVisible: false 
        }));
    };

    toggleAdditionalNumbers = (e) => {
        e.stopPropagation();
        this.setState(prevState => ({ 
            additionalNumbersVisible: !prevState.additionalNumbersVisible,
            languageDropdownVisible: false,
            mobileMenuVisible: false,
            searchDropdownVisible: false
        }));
    };

    toggleSearchDropdown = (e) => {
        e.stopPropagation();
        this.setState(prevState => ({ 
            searchDropdownVisible: !prevState.searchDropdownVisible,
            languageDropdownVisible: false,
            mobileMenuVisible: false,
            additionalNumbersVisible: false
        }));
    };

    renderDesktopTopSection = () => (
        <div className={[c.container, style.container, style.header__section1].join(' ')} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="100">
            <ul className={style.header__list}>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="600" data-aos-delay="150" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./about-us.html"><FiHome size={16} strokeWidth={1} /> Про нас</a>
                </li>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./pay.html"><FiShoppingCart size={16} strokeWidth={1} /> Оплата</a>
                </li>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="800" data-aos-delay="250" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./delivery.html"><FiTruck size={16} strokeWidth={1} /> Доставка та збірка</a>
                </li>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./reviews.html"><FiMessageSquare size={16} strokeWidth={1} /> Відгуки</a>
                </li>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./blog-page.html"><FiBook size={16} strokeWidth={1} /> Блог</a>
                </li>
                <li className={style.header__item} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="400" data-aos-easing="ease-out-quart" data-aos-anchor=".header__section1">
                    <a href="./contacts.html"><FiMail size={16} strokeWidth={1} /> Контакти</a>
                </li>
                <li className={style["header__list-svg"]} data-aos="fade-left" data-aos-duration="800" data-aos-delay="450" data-aos-easing="ease-out-back" data-aos-anchor=".header__section1">
                    <div 
                        ref={this.languageRef}
                        className={style.header__lang_container} 
                        onClick={this.toggleLanguage}
                    >
                        <p className={style.header__lang_text}>UA</p>
                        <FiChevronDown size={16} strokeWidth={1} />
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
        <div className={style.header__mobile} data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-out-cubic">
            
            <div className={style.header__mobile_row}>
                <div 
                    ref={this.mobileMenuRef}
                    className={`${style.header__burger_menu} ${this.state.mobileMenuVisible ? style.active : ''}`} 
                    onClick={this.toggleMenu}
                    data-aos="zoom-in" 
                    data-aos-duration="600"
                    data-aos-delay="150"
                    data-aos-easing="ease-out-back"
                >
                    
                    <FiMenu size={28} strokeWidth={1} />
                </div>
                <div className={style.header__logo} data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100" data-aos-easing="ease-out-cubic">
                    <a href="./index.html">
                        <img src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp" alt="Krovato" />
                    </a>
                </div>
                <div 
                    ref={this.additionalNumbersRef}
                    className={style.header__phone_icon} 
                    onClick={this.toggleAdditionalNumbers}
                    data-aos="zoom-in" 
                    data-aos-duration="600"
                    data-aos-delay="200"
                    data-aos-easing="ease-out-back"
                >
                    <FiPhone size={28} strokeWidth={1} />
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
            
            <div className={style.header__mobile_row}>
                <div className={style.header__catalog_btn} data-aos="flip-up" data-aos-duration="900" data-aos-delay="250" data-aos-easing="ease-out-back">
                    <a href="#" className={style.catalog_orange_btn}>Каталог</a>
                </div>
                <div className={style.header__mobile_icons}>
                    <div 
                        ref={this.searchRef}
                        className={style.header__icon_btn} 
                        onClick={this.toggleSearchDropdown}
                        data-aos="zoom-in" 
                        data-aos-duration="700"
                        data-aos-delay="300"
                        data-aos-easing="ease-out-back"
                    >
                        <FiSearch size={24} />
                    </div>
                    <div className={style.header__icon_btn} data-aos="zoom-in" data-aos-duration="700" data-aos-delay="350" data-aos-easing="ease-out-back">
                        <div className={style.icon_with_badge}>
                            <HiOutlineShoppingBag size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderMiddleSection = () => (
        <div className={[c.container, style.container, style.header__middle].join(' ')} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200" data-aos-easing="ease-out-quart">
            <div className={style.header__item} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-out-cubic" data-aos-anchor=".header__list2">
                <a className={style.header__logo_link} href="./index.html">
                    <div className={style.header__logo}>
                        <img src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp" alt="Krovato" />
                    </div>
                </a>
            </div>
            <div className={style.header__form_box} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200" data-aos-easing="ease-out-quart" data-aos-anchor=".header__list2">
                <form className={style.header__form}>
                    <input className={style.header__find} type="text" placeholder="Я шукаю..." />
                    <button type="submit" className={style.search_button}>
                        <FiSearch className={style.search__svg} size={24} />
                    </button>
                </form>
            </div>
            <div 
                ref={this.additionalNumbersRef}
                className={style.header__item} 
                style={{ display: 'flex', alignItems: 'center' }}
                data-aos="fade-up" 
                data-aos-duration="900" 
                data-aos-delay="300"
                data-aos-easing="ease-out-quart" 
                data-aos-anchor=".header__list2"
            >
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
            <div className={style.header__icon_container} data-aos="flip-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-back" data-aos-anchor=".header__list2">
                <FaHeart className={style.heart_icon} size={24} />
            </div>
            <a href="#" className={style.header__icon_container} data-aos="flip-up" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out-back" data-aos-anchor=".header__list2">
                <button className={style.icon_with_badge} onClick={() => {
                    CartModal.openModal();
                }}>
                    <HiOutlineShoppingBag className={style.cart_icon} size={24}/>
                </button>
            </a>
            <CartModal ref={this.cartModalRef} />
        </div>
    );

    renderBottomSection = () => (
        <div className={[c.container, style.container, style.header__list3].join(' ')} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
            <div className={style.header__item} data-aos="zoom-in-right" data-aos-duration="900" data-aos-delay="100" data-aos-easing="ease-out-back" data-aos-anchor=".header__list3">
                <a className={`${style.header__link} ${style.catalog_orange_btn}`} href="#">
                    Каталог
                </a>
            </div>
            <div className={style.header__item} data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-back" data-aos-anchor=".header__list3">
                <a className={style.header__link} href="#">
                    <AiOutlineStar className={style.icon_promo} size={20} />
                    <span>Акції</span>
                </a>
            </div>
            <div className={style.header__item} data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-back" data-aos-anchor=".header__list3">
                <a className={style.header__link} href="#">
                    <FaPercent className={style.icon_sale} size={18} />
                    <span>Розпродаж</span>
                </a>
            </div>
            <div className={style.header__item} data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-back" data-aos-anchor=".header__list3">
                <a className={style.header__link} href="#">
                    <BsCreditCard2Front className={style.icon_credit} size={20} />
                    <span>Купити в кредит</span>
                </a>
            </div>
            <div className={style.header__button} data-aos="zoom-in-left" data-aos-duration="900" data-aos-delay="500" data-aos-easing="ease-out-back" data-aos-anchor=".header__list3">
                Передзвоніть мені
            </div>

        </div>
    );

    renderMobileMenu = () => (
        <>
            <div className={style.mobile_menu_list} data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-out-cubic">
                <a href="./about-us.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="600" data-aos-delay="50" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiHome size={24} /> Про нас
                </a>
                <a href="./pay.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiShoppingCart size={24} /> Оплата
                </a>
                <a href="./delivery.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="800" data-aos-delay="150" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiTruck size={24} /> Доставка та збірка
                </a>
                <a href="./reviews.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="900" data-aos-delay="200" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiMessageSquare size={24} /> Відгуки
                </a>
                <a href="./blog-page.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiBook size={24} /> Блог
                </a>
                <a href="./contacts.html" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="300" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FiMail size={24} /> Контакти
                </a>
                <a href="#" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="1200" data-aos-delay="350" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <AiOutlineStar size={24} /> Акції
                </a>
                <a href="#" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="1300" data-aos-delay="400" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <FaPercent size={24} /> Розпродаж
                </a>
                <a href="#" className={style.mobile_menu_link} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="450" data-aos-easing="ease-out-quart" data-aos-anchor=".mobile_menu_list">
                    <BsCreditCard2Front size={24} /> Купити в кредит
                </a>
                <div className={style.mobile_menu_language} data-aos="fade-up" data-aos-duration="900" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-anchor=".mobile_menu_list">
                    <span>Мова:</span>
                    <button className={`${style.lang_btn} ${style.active}`}>UA</button>
                    <button className={style.lang_btn}>EN</button>
                </div>
                <a href="#" className={style.callback_btn} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="550" data-aos-easing="ease-out-back" data-aos-anchor=".mobile_menu_list">
                    Передзвоніть мені
                </a>
            </div>
            <div className={style.blur_overlay} onClick={this.toggleMenu} data-aos="fade" data-aos-duration="400"></div>
        </>
    );

    renderMobileSearch = () => (
        <>
            <div className={style.dropdown_menu} data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-out-cubic">
                <form className={style.header__form_mobile}>
                    <input type="text" className={style.header__find_mob} placeholder="Я шукаю..." data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-out-quart" data-aos-anchor=".dropdown_menu" />
                    <button type="submit" className={style.mobile_search_btn} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-back" data-aos-anchor=".dropdown_menu">
                        <FiSearch size={24} />
                    </button>
                </form>
            </div>
            <div className={style.blur_overlay_find} onClick={this.toggleSearchDropdown} data-aos="fade" data-aos-duration="400"></div>
        </>
    );

    render() { 
        return (
            <header className={style.header}>
                <div className={style.desktop_only}>
                    {this.renderDesktopTopSection()}
                    {this.renderMiddleSection()}
                    {this.renderBottomSection()}
                </div>
                {this.renderMobileTopSection()}
                {this.state.mobileMenuVisible && this.renderMobileMenu()}
                {this.state.searchDropdownVisible && this.renderMobileSearch()}
            </header>
        );
    }
}