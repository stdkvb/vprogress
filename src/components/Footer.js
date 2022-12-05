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
                    <a className='footer__link' href=''>Повышение квалификации</a>
                    <a className='footer__link' href=''>Рабочие специальности</a>
                    <a className='footer__link' href=''>Курсы</a>
                    <a className='footer__link' href=''>Профессиональная переподготовка</a>
                    <span className='footer__subtitle'>Для организаций</span>                  
                    <a className='footer__link' href=''>Охрана труда</a>
                    <a className='footer__link' href=''>Промышленная безопасность</a>
                    <a className='footer__link' href=''>Пожарная безопасность</a>
                    <a className='footer__link' href=''>Электроэнергетика и электробезопасность</a>
                    <a className='footer__link' href=''>Экологическая безопасность</a>
                    <a className='footer__link' href=''>Транспортная безопасность</a>
                    <a className='footer__link' href=''>Строительство</a>
                    <a className='footer__link' href=''>Рабочие специальности</a>
                    <a className='footer__link' href=''>Курсы</a>
                </div>
                <div className='footer__column'>
                    <span className='footer__title'>О нас</span>
                    <a className='footer__link' href=''>О компании</a>
                    <a className='footer__link' href=''>Новости</a>
                    <a className='footer__link' href=''>Педагогический состав</a>
                    <a className='footer__link' href=''>Отзывы</a>
                    <a className='footer__link' href=''>Сведения об образовательной организации</a>
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
                <div>
                    <a className='footer__copyright-link' href=''>Политика обработки персональных данных</a>
                    <span> | </span>
                    <a className='footer__copyright-link' href=''>Лицензии</a>
                </div>
                <span>Разработка сайта — <a className='footer__developed-link' href=''>Вебпространство</a></span>
            </div>
        </footer>
    );
};

export default Footer;