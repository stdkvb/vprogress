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
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);
  
  return (
    <header className={`header ${small ? 'header_small' : ''}`}>
      <img className={`header__logo ${small ? 'header__logo_small' : ''}`} src={logo} alt='логотип' />
      {!small ?
        <>
          <nav className='header__nav-menu'>
            <div className='header__top-menu'>
              <a className='header__top-menu-link'>Сведения об образовательной организации</a>
              <a className='header__top-menu-link'>Онлайн-образование</a>
              <img className='header__top-menu-icon' src={eye} alt='Версия для слабовидящих'></img>
            </div>
            <div className='header__bottom-menu'>
              <a className='header__bottom-menu-link'>Учебные программы</a>
              <a className='header__bottom-menu-link'>Об учебном центре</a>
              <a className='header__bottom-menu-link'>Полезно знать</a>
              <a className='header__bottom-menu-link'>Контакты</a>
            </div>
            <div className='header__account-menu'>
              <img className='header__account-menu-icon' src={person} alt='Личный кабинет' />
              <a className='header__account-menu-link'>Личный кабинет</a>
              <img className='header__account-menu-icon' src={heart} alt='Избранное'></img>
              <img className='header__account-menu-icon' src={trolley} alt='Корзина'></img>
            </div>
            <div className='header__phone-menu'>
              <div className='header__phone-menu-number'>
                <img className='header__phone-menu-icon' src={phone} alt='Телефон'></img>
                +7 (937) 357-78-78
              </div>
              <a className='header__phone-menu-link'>Заказать звонок</a>
            </div>
          </nav>
        </> : <>
          <nav className='header__nav-menu header__nav-menu_small'>
            <div className='header__bottom-menu'>
              <a className='header__bottom-menu-link'>Учебные программы</a>
              <a className='header__bottom-menu-link'>Об учебном центре</a>
              <a className='header__bottom-menu-link'>Полезно знать</a>
              <a className='header__bottom-menu-link'>Контакты</a>
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
  );
}

export default Header;