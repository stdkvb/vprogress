import React from 'react';
import tabIcon from '../images/tab-icon.svg';

function OrganizationsProgramms() {
    return (
        <div className='programms__content'>
            <div className='programms__discount'>
                <span className='programms__discount-text'>Получите моментальный рассчет стоимости обучения с выгодой до 70%</span>
                <button className='programms__discount-button'>Получить скидку</button>
            </div>
            <ul className='programms__tabs-list'>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Охрана труда</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Промышленная безопасность</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Электроэнергетика и электробезопасность</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Экологическая безопасность</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Транспортная безопасность</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Строительство</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Рабочие специальности</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
                <li className='programms__tab-item'>
                    <h3 className='programms__tab-title'>Курсы</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>
                </li>
            </ul>
        </div>
    )
};

export default OrganizationsProgramms;