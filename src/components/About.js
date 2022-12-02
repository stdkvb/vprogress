import React from 'react';
import play from '../images/play_button.svg';
import check from '../images/check.svg';

function About() {
    return (
        <div className='about'>
            <div className='about__container'>
                <div className='about__description'>
                    <h1 className='about__title'>Профессиональный подход к обучению</h1>
                    <ul className='about__list'>
                        <li className='about__list-item'><img className='about__check-icon' src={check} alt=''></img>Обучение, переподготовка, повышение квалификации</li>
                        <li className='about__list-item'><img className='about__check-icon' src={check} alt=''></img>Услуги лицензированного учебного центра по оптимальной цене</li>
                        <li className='about__list-item'><img className='about__check-icon' src={check} alt=''></img>Выдаем документы, подтвердающие прохождение обучения</li>
                    </ul>
                    <button className='about__button'>Выбрать направление</button>
                    <button className='about__button about__button_colored'>О компании</button>
                </div>
                <div className='about__video'>
                    <button className='about__video-play-button'><img src={play} alt='воспроизвести видео'></img></button>
                    <span className='about__video-description'>Узнайте больше<br/>о нашей компании из короткого видео</span>
                </div>
            </div>
            <div className='about__achievements'>
                <div className='about__achievements-item'>
                    <p className='about__achievements-title'>10 лет</p>
                    <p className='about__achievements-subtitle'>опыта в образовании</p>
                </div>
                <div className='about__achievements-item'>
                    <p className='about__achievements-title'>700</p>
                    <p className='about__achievements-subtitle'>учебных программ</p>
                </div>
                <div className='about__achievements-item'>
                    <p className='about__achievements-title'>12+</p>
                    <p className='about__achievements-subtitle'>филиалов в стране</p>
                </div>
            </div>
        </div>
    );
};

export default About;