import React from 'react';
import logo_footer from '../images/logo_footer.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__column'>
                    <img className='footer__logo' src={logo_footer} alt='лого'></img>
                    <span>ООО «Прогресс» профессиональный подход к обучению ООО «В прогресс»<br></br>профессиональный подход к<br></br>обучению</span>
                </div>
                <div className='footer__column'>
                    <span className='footer__title'>Учебные программы</span>
                    <span className='footer__subtitle'>Для себя</span>
                    <span className='footer__link'>Повышение квалификации</span>
                    <span className='footer__link'>Рабочие специальности</span>
                    <span className='footer__link'>Курсы</span>
                    <span className='footer__link'>Профессиональная переподготовка</span>
                    <span className='footer__subtitle'>Для организаций</span>                  
                    <span className='footer__link'>Охрана труда</span>
                    <span className='footer__link'>Промышленная безопасность</span>
                    <span className='footer__link'>Пожарная безопасность</span>
                    <span className='footer__link'>Электроэнергетика и электробезопасность</span>
                    <span className='footer__link'>Экологическая безопасность</span>
                    <span className='footer__link'>Транспортная безопасность</span>
                    <span className='footer__link'>Строительство</span>
                    <span className='footer__link'>Рабочие специальности</span>
                    <span className='footer__link'>Курсы</span>
                </div>
                <div className='footer__column'>
                    <span className='footer__title'>О нас</span>
                    <span className='footer__link'>О компании</span>
                    <span className='footer__link'>Новости</span>
                    <span className='footer__link'>Педагогический состав</span>
                    <span className='footer__link'>Отзывы</span>
                    <span className='footer__link'>Сведения об образовательной организации</span>
                </div>
                <div className='footer__column'>
                    <span className='footer__title'>Лицензия</span>
                    <span>№4498 от 26 августа 2016г на осуществление образовательной деятельности</span>
                    <div>
                        <img className='footer__social-icon' src={require('../images/whatsapp.png')} alt='whatsapp'></img>
                        <img className='footer__social-icon' src={require('../images/telegram.png')} alt='telegram'></img>
                        <img className='footer__social-icon' src={require('../images/vk.png')} alt='vk'></img>
                    </div>
                    <span className='footer__title'>Телефон</span>
                    <span>8-927-337-78-78</span>
                </div>
            </div>
            <div className='footer__copyright'>
                <span>ООО «Прогресс» © 2016 - 2022</span>
                <div className='footer__copyright-links'>
                    <span className='footer__copyright-link'>Политика обработки персональных данных</span>
                    <span className='footer__copyright-divider'> | </span>
                    <span className='footer__copyright-link'>Лицензии</span>
                </div>
                <span>Разработка сайта — <span className='footer__developed-link'>Вебпространство</span></span>
            </div>
        </footer>
    );
};

export default Footer;