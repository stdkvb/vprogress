import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import eye from '../images/eye.svg';
import person from '../images/person.svg';
import heart from '../images/heart.svg';
import trolley from '../images/trolley.svg';
import phone from '../images/phone.svg';

function Header() {
  const [small, setSmall] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  const burgerRef = React.useRef();
  const navMenuRef = React.useRef();

  const handleToggleActiveNav = () => {
    burgerRef.current.classList.toggle('header__burger-button_active');
    navMenuRef.current.classList.toggle('header__nav-menu_active');
  }
  
  return (<>
    <header className={`header ${small ? 'header_small' : ''}`}>
      <img className={`header__logo ${small ? 'header__logo_small' : ''}`} src={logo} alt='логотип' />
      {!small ?
        <>
          <nav className='header__nav-menu'>
            <div className='header__top-menu'>
              <span className='header__top-menu-link'>Сведения об образовательной организации</span>
              <span className='header__top-menu-link'>Онлайн-образование</span>
              <img className='header__top-menu-icon' src={eye} alt='Версия для слабовидящих'></img>
            </div>
            <div className='header__bottom-menu'>
              <span className='header__bottom-menu-link'>Учебные программы</span>
              <span className='header__bottom-menu-link'>Об учебном центре</span>
              <span className='header__bottom-menu-link'>Полезно знать</span>
              <span className='header__bottom-menu-link'>Контакты</span>
            </div>
            <div className='header__account-menu'>
              <img className='header__account-menu-icon' src={person} alt='Личный кабинет' />
              <span className='header__account-menu-link'>Личный кабинет</span>
              <img className='header__account-menu-icon' src={heart} alt='Избранное'></img>
              <img className='header__account-menu-icon' src={trolley} alt='Корзина'></img>
            </div>
            <div className='header__phone-menu'>
              <div className='header__phone-menu-number'>
                <img className='header__phone-menu-icon' src={phone} alt='Телефон'></img>
                +7 (937) 357-78-78
              </div>
              <span className='header__phone-menu-link'>Заказать звонок</span>
            </div>
          </nav>
        </> : <>
          <nav className='header__nav-menu header__nav-menu_small'>
            <div className='header__bottom-menu'>
              <span className='header__bottom-menu-link'>Учебные программы</span>
              <span className='header__bottom-menu-link'>Об учебном центре</span>
              <span className='header__bottom-menu-link'>Полезно знать</span>
              <span className='header__bottom-menu-link'>Контакты</span>
            </div>
            <div className='header__phone-menu header__phone-menu_small'>
                <img className='header__phone-menu-icon' src={phone} alt='Телефон'></img>
                +7 (222) 222-22-22
            </div>
            <div className='header__account-menu header__account-menu_small'>
              <img className='header__account-menu-icon' src={person} alt='Личный кабинет' />
              <img className='header__account-menu-icon' src={heart} alt='Избранное'></img>
              <img className='header__account-menu-icon' src={trolley} alt='Корзина'></img>
            </div>
          </nav>
        </>
      }
    </header>
    
    <header className='header_mobile'>
      <div className='header__top-bar'>
        <img className='header__logo_mobile' src={logo} alt='логотип' />
        <span className='header__phone'>+7 (222) 222-22-22</span>
        <button className='header__burger-button' ref={burgerRef} onClick={handleToggleActiveNav}></button>
      </div>
      <nav className='header__nav-menu_mobile' ref={navMenuRef} onClick={handleToggleActiveNav}>
        <div className='header__bottom-menu_mobile'>
          <span className='header__bottom-menu-link_mobile'>Учебные программы</span>
          <span className='header__bottom-menu-link_mobile'>Об учебном центре</span>
          <span className='header__bottom-menu-link_mobile'>Полезно знать</span>
          <span className='header__bottom-menu-link_mobile'>Контакты</span>
        </div>
        <div className='header__top-menu_mobile'>
          <span className='header__top-menu-link_mobile'>Сведения об образовательной организации</span>
          <span className='header__top-menu-link_mobile'>Онлайн-образование</span>
          <span className='header__top-menu-link_mobile'>Версия для слабовидящих</span>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Header;