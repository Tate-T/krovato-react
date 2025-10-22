import React, { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import c from "../../components/Container/Container.module.scss";
import style from "./h.module.scss";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiPhone, FiMenu, FiChevronDown, FiX, FiHeart } from "react-icons/fi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaPercent, FaHeart } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import {
  FiHome,
  FiShoppingCart,
  FiTruck,
  FiMessageSquare,
  FiBook,
  FiMail,
} from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";
import "./body-padding-top.css";

import { CartModal } from "../BasketModal/BasketModal";
import Favorite from "../../pages/Favorite/Favorite";
import { Login } from "./Login";

const Header = ({ isLogged, onLogout }) => {
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [additionalNumbersVisible, setAdditionalNumbersVisible] = useState(false);
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);
  const [favoriteModalVisible, setFavoriteModalVisible] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cartModalRef = useRef();
  const languageRef = useRef();
  const mobileMenuRef = useRef();
  const additionalNumbersRef = useRef();
  const searchRef = useRef();
  const favoriteModalRef = useRef();

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartItemsCount(totalCount);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        languageDropdownVisible &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageDropdownVisible(false);
      }

      if (
        additionalNumbersVisible &&
        additionalNumbersRef.current &&
        !additionalNumbersRef.current.contains(event.target)
      ) {
        setAdditionalNumbersVisible(false);
      }

      if (
        searchDropdownVisible &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchDropdownVisible(false);
      }

      if (
        mobileMenuVisible &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuVisible(false);
        document.body.style.overflow = 'unset';
        document.documentElement.style.overflow = 'unset';
      }

      if (
        favoriteModalVisible &&
        favoriteModalRef.current &&
        !favoriteModalRef.current.contains(event.target)
      ) {
        setFavoriteModalVisible(false);
      }
    },
    [languageDropdownVisible, additionalNumbersVisible, searchDropdownVisible, mobileMenuVisible, favoriteModalVisible]
  );

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      offset: 120,
      easing: "ease-out-sine",
      delay: 50,
      anchorPlacement: "top-center",
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
      useClassNames: true,
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });

    window.addEventListener("load", () => {
      AOS.refresh();
    });

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleResize, handleClickOutside]);

  const toggleLanguage = (e) => {
    e.stopPropagation();
    setLanguageDropdownVisible((prev) => !prev);
    setMobileMenuVisible(false);
    setAdditionalNumbersVisible(false);
    setSearchDropdownVisible(false);
  };

  const toggleMobileMenu = (e) => {
    e && e.stopPropagation();
    const newState = !mobileMenuVisible;
    setMobileMenuVisible(newState);
    setLanguageDropdownVisible(false);
    setAdditionalNumbersVisible(false);
    setSearchDropdownVisible(false);
    
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  };

  const toggleAdditionalNumbers = (e) => {
    e.stopPropagation();
    setAdditionalNumbersVisible((prev) => !prev);
    setLanguageDropdownVisible(false);
    setMobileMenuVisible(false);
    setSearchDropdownVisible(false);
  };

  const toggleSearchDropdown = (e) => {
    e.stopPropagation();
    setSearchDropdownVisible((prev) => !prev);
    setLanguageDropdownVisible(false);
    setMobileMenuVisible(false);
    setAdditionalNumbersVisible(false);
  };

  const handleOpenCart = () => {
    if (cartModalRef.current) {
      cartModalRef.current.openModal();
    }
  };

  const handleOpenFavorite = () => {
    setFavoriteModalVisible(true);
  };

  const handleCloseFavorite = () => {
    setFavoriteModalVisible(false);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuVisible(false);
    document.body.style.overflow = 'unset';
    document.documentElement.style.overflow = 'unset';
  };

  const renderDesktopTopSection = () => (
    <div
      className={[c.container, style.container, style.header__section1].join(" ")}
      data-aos="fade-down"
      data-aos-duration="800"
      style={{
        display: windowWidth < 481 ? "none" : undefined,
      }}
    >
      <ul className={style.header__list}>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="600" data-aos-delay="150">
          <Link to="/aboutUs">
            <FiHome size={16} strokeWidth={1} /> Про нас
          </Link>
        </li>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
          <Link to="/pay">
            <FiShoppingCart size={16} strokeWidth={1} /> Оплата
          </Link>
        </li>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="800" data-aos-delay="250">
          <Link to="/delivery">
            <FiTruck size={16} strokeWidth={1} /> Доставка та збірка
          </Link>
        </li>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="900" data-aos-delay="300">
          <Link to="/reviews">
            <FiMessageSquare size={16} strokeWidth={1} /> Відгуки
          </Link>
        </li>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350">
          <Link to="/blog">
            <FiBook size={16} strokeWidth={1} /> Блог
          </Link>
        </li>
        <li className={style.header__item} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="400">
          <Link to="/contacts">
            <FiMail size={16} strokeWidth={1} /> Контакти
          </Link>
        </li>
        <li className={style["header__list-svg"]} data-aos="fade-left" data-aos-duration="800" data-aos-delay="450">
          <div
            ref={languageRef}
            className={style.header__lang_container}
            onClick={toggleLanguage}
          >
            <p className={style.header__lang_text}>UA</p>
            <FiChevronDown size={16} strokeWidth={1} />
            {languageDropdownVisible && (
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

  const renderMobileTopSection = () => (
    <div
      className={style.header__mobile}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className={style.header__mobile_row}>
        <div
          className={`${style.burger_wrapper} ${mobileMenuVisible ? style.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className={style.burger_icon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div
          className={style.header__logo}
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <NavLink to="/">
            <img
              src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp"
              alt="Krovato"
            />
          </NavLink>
        </div>
        
        <div
          ref={additionalNumbersRef}
          className={style.header__phone_icon}
          onClick={toggleAdditionalNumbers}
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <FiPhone size={28} strokeWidth={1} />
          {additionalNumbersVisible && (
            <div className={style.mobile_phone_dropdown}>
              <p className={style.mobile_phone_text}>Щодня з 9:00 до 18:00</p>
              <a href="tel:+380679294545" className={style.mobile_phone_number}>
                067 929-45-45
              </a>
              <a href="tel:+380501334545" className={style.mobile_phone_number}>
                050 133-45-45
              </a>
              <a href="tel:+380931707545" className={style.mobile_phone_number}>
                093 170-75-45
              </a>
              <a href="#" className={style.callback_link}>
                Передзвоніть мені
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={style.header__mobile_row}>
        <div
          className={style.header__catalog_btn}
          data-aos="flip-up"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <NavLink to="/catalog" className={style.catalog_orange_btn}>
            Каталог
          </NavLink>
        </div>
        <div className={style.header__mobile_icons}>
          <div
            ref={searchRef}
            className={style.header__icon_btn}
            onClick={toggleSearchDropdown}
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <FiSearch size={24} />
          </div>
          <div
            className={style.header__icon_btn}
            onClick={handleOpenCart}
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="350"
          >
            <div className={style.icon_with_badge} data-count={cartItemsCount || ''}>
              <HiOutlineShoppingBag size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMiddleSection = () => (
    <div
      className={[c.container, style.container, style.header__middle].join(" ")}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
    >
      <div
        className={style.header__item}
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <Link className={style.header__logo_link} to="/">
          <div className={style.header__logo}>
            <img
              src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp"
              alt="Krovato"
            />
          </div>
        </Link>
      </div>
      <div
        className={style.header__form_box}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        <form
          className={style.header__form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            className={style.header__find}
            type="text"
            placeholder="Я шукаю..."
          />
          <button type="submit" className={style.search_button}>
            <FiSearch className={style.search__svg} size={24} />
          </button>
        </form>
      </div>
      <div
        ref={additionalNumbersRef}
        className={style.header__item}
        style={{ display: "flex", alignItems: "center", position: "relative" }}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
      >
        <FiPhone className={style.phone_icon} size={24} />
        <div className={style.phone_info}>
          <p className={style.header__paragraph}>Щодня з 9:00 до 18:00</p>
          <h4 className={style.header__number}>067 929-45-45</h4>
        </div>
        <FiChevronDown
          className={style.dropdown_icon}
          onClick={toggleAdditionalNumbers}
          size={24}
        />
        {additionalNumbersVisible && (
          <div className={style.header__dropdown_menu_box}>
            <div className={style.header__dropdown_menu}>
              <p className={style.header__paragraph_drop}>
                Щодня з 9:00 до 18:00
              </p>
              <p className={style.header__number_drop}>067 929-45-45</p>
              <p className={style.header__number_drop}>050 133-45-45</p>
              <p className={style.header__number_drop}>093 170-75-45</p>
              <a href="#" className={style.header__link_drop}>
                Передзвоніть мені
              </a>
            </div>
          </div>
        )}
      </div>

      <div className={style.loginItems}>
        {!isLogged ? (
          <div className={style.header__icon_container}>
            <Login isLogged={isLogged} />
          </div>
        ) : (
          <div className={style.auth_section}>
            <div className={style.icons_row}>
              <div className={style.header__icon_container}>
                <button
                  className={style.icon_with_badge}
                  onClick={handleOpenFavorite}
                  type="button"
                >
                  <FaHeart className={style.heart_icon} size={20} />
                </button>
              </div>
              <div className={style.header__icon_container}>
                <button
                  className={style.icon_with_badge}
                  onClick={handleOpenCart}
                  data-count={cartItemsCount || ''}
                  type="button"
                >
                  <HiOutlineShoppingBag className={style.cart_icon} size={20} />
                </button>
              </div>
            </div>
            <div className={style.logout_row}>
              <button 
                className={`${style.logoutBtn} ${style.neutralButton}`}
                onClick={onLogout}
                title="Logout"
                type="button"
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderBottomSection = () => (
    <div
      className={[c.container, style.container, style.header__list3].join(" ")}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div
        className={style.header__item}
        data-aos="zoom-in-right"
        data-aos-duration="900"
        data-aos-delay="100"
      >
        <NavLink
          to="/catalog"
          className={`${style.header__link} ${style.catalog_orange_btn}`}
        >
          Каталог
        </NavLink>
      </div>
      <div
        className={style.header__item}
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <a className={style.header__link} href="#">
          <AiOutlineStar className={style.icon_promo} size={20} />
          <span>Акції</span>
        </a>
      </div>
      <div
        className={style.header__item}
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <Link className={style.header__link} to="/catalog">
          <FaPercent className={style.icon_sale} size={18} />
          <span>Розпродаж</span>
        </Link>
      </div>
      <div
        className={style.header__item}
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <a className={style.header__link} href="#">
          <BsCreditCard2Front className={style.icon_credit} size={20} />
          <span>Купити в кредит</span>
        </a>
      </div>
      <div
        className={style.header__button}
        data-aos="zoom-in-left"
        data-aos-duration="900"
        data-aos-delay="500"
      >
        Передзвоніть мені
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <>
      <div 
        className={`${style.menu_overlay} ${mobileMenuVisible ? style.active : ''}`}
        onClick={toggleMobileMenu}
      />
      
      <div 
        className={`${style.modern_mobile_menu} ${mobileMenuVisible ? style.active : ''}`}
        ref={mobileMenuRef}
      >
        <div className={style.menu_header}>
          <div className={style.menu_logo}>
            <img
              src="https://tate-t.github.io/krovato-market/assets/logo-header@2x-f83feaba.webp"
              alt="Krovato"
            />
          </div>
          <div className={style.menu_close_wrapper}>
            <button 
              className={style.menu_close}
              onClick={toggleMobileMenu}
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        <div className={style.menu_content}>
          <nav className={style.menu_nav}>
            <Link to="/aboutUs" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiHome size={22} /></div>
              <span className={style.menu_text}>Про нас</span>
              <div className={style.menu_arrow}>›</div>
            </Link>

            <Link to="/pay" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiShoppingCart size={22} /></div>
              <span className={style.menu_text}>Оплата</span>
              <div className={style.menu_arrow}>›</div>
            </Link>

            <Link to="/delivery" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiTruck size={22} /></div>
              <span className={style.menu_text}>Доставка та збірка</span>
              <div className={style.menu_arrow}>›</div>
            </Link>

            <Link to="/reviews" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiMessageSquare size={22} /></div>
              <span className={style.menu_text}>Відгуки</span>
              <div className={style.menu_arrow}>›</div>
            </Link>

            <Link to="/blog" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiBook size={22} /></div>
              <span className={style.menu_text}>Блог</span>
              <div className={style.menu_arrow}>›</div>
            </Link>

            <Link to="/contacts" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FiMail size={22} /></div>
              <span className={style.menu_text}>Контакти</span>
              <div className={style.menu_arrow}>›</div>
            </Link>
          </nav>

          <div className={style.menu_divider}></div>

          <nav className={style.menu_nav}>
            <a href="#" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><AiOutlineStar size={22} /></div>
              <span className={style.menu_text}>Акції</span>
              <div className={style.menu_badge}>NEW</div>
            </a>

            <a href="#" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><FaPercent size={20} /></div>
              <span className={style.menu_text}>Розпродаж</span>
              <div className={style.menu_badge}>-50%</div>
            </a>

            <a href="#" className={style.menu_item} onClick={handleMobileLinkClick}>
              <div className={style.menu_icon}><BsCreditCard2Front size={20} /></div>
              <span className={style.menu_text}>Купити в кредит</span>
            </a>
          </nav>

          <div className={style.menu_divider}></div>

          <div className={style.menu_contacts}>
            <div className={style.contact_header}>
              <FiPhone size={18} />
              <span>Контакти</span>
            </div>
            <p className={style.contact_hours}>Щодня з 9:00 до 18:00</p>
            <div className={style.contact_phones}>
              <a href="tel:+380679294545" className={style.contact_phone}>
                067 929-45-45
              </a>
              <a href="tel:+380501334545" className={style.contact_phone}>
                050 133-45-45
              </a>
              <a href="tel:+380931707545" className={style.contact_phone}>
                093 170-75-45
              </a>
            </div>
          </div>

          <button className={style.menu_call_btn} onClick={handleMobileLinkClick}>
            <FiPhone size={18} />
            Передзвоніть мені
          </button>

          <div className={style.menu_social}>
            <span>Ми в соцмережах:</span>
            <div className={style.social_links}>
              <a href="#" className={style.social_link}>Instagram</a>
              <a href="#" className={style.social_link}>Facebook</a>
              <a href="#" className={style.social_link}>Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderMobileSearch = () => (
    <>
      {searchDropdownVisible && (
        <>
          <div
            className={style.dropdown_menu}
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <form
              className={style.header__form_mobile}
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                className={style.header__find_mob}
                placeholder="Я шукаю..."
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              />
              <button
                type="submit"
                className={style.mobile_search_btn}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <FiSearch size={24} />
              </button>
            </form>
          </div>
          <div
            className={style.blur_overlay_find}
            onClick={toggleSearchDropdown}
            data-aos="fade"
            data-aos-duration="400"
          ></div>
        </>
      )}
    </>
  );

  const renderModals = () => (
    <>
      {favoriteModalVisible && (
        <div
          className={style.favorite_modal_overlay}
          onClick={handleCloseFavorite}
        >
          <div
            ref={favoriteModalRef}
            className={`${style.favorite_modal} ${favoriteModalVisible ? style.modal_enter : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Favorite
              isOpen={favoriteModalVisible}
              onClose={handleCloseFavorite}
            />
          </div>
        </div>
      )}

      {isLogged && <CartModal ref={cartModalRef} />}
    </>
  );

  return (
    <>
      <header className={style.header}>
        <div className={style.desktop_only}>
          {renderDesktopTopSection()}
          {renderMiddleSection()}
          {renderBottomSection()}
        </div>

        {renderMobileTopSection()}
        {renderMobileMenu()}
        {renderMobileSearch()}
      </header>

      {renderModals()}
    </>
  );
};

export default Header;