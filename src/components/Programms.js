import React, { useState } from 'react';
import SelfProgramms from './SelfProgramms';
import OrganizationsProgramms from './OrganizationsProgramms';
import search from '../images/search.svg';

function Programms() {
    const [activeTab, setActiveTab] = useState('selfProgramms')

    const handleTabSelf = () => {
        setActiveTab('selfProgramms');
    };

    const handleTabOrganizations = () => {
        setActiveTab('organizationProgramms');
    };

    return (
        <section className='programms'>
            <h2 className='programms__title'>Выберите учебную программу</h2>
            <div className='programms__container'>
                <div className='programms__nav-bar'>
                    <button
                        className={`programms__nav-button ${activeTab === 'selfProgramms' ? 'programms__nav-button_active' : ''}`}
                        onClick={handleTabSelf}>
                    Для себя
                    </button>
                    <button
                        className={`programms__nav-button programms__nav-button_wide ${activeTab === 'organizationProgramms' ? 'programms__nav-button_active' : ''}`}
                        onClick={handleTabOrganizations}>
                    Для организаций
                    </button>
                </div>
                <div className='programms__search-bar'>
                        <input className='programms__search-input' placeholder='Название программы' type='text'></input>
                        <button className='programms__search-button'><img className='programms__search-icon' src={search} alt='поиск'></img></button>
                </div>

                {activeTab === 'selfProgramms' ? <SelfProgramms /> : <OrganizationsProgramms />}
                               
                <div className='programms__help'>
                    <h3 className='programms__help-title'>Не нашли нужную программу обучения?</h3>
                    <p className='programms__help-subtitle'>Закажите звонок и мы Вам поможем</p>
                    <button className='programms__help-button' type='button'>Нужна помощь</button>
                </div>
            </div>
        </section>
    );
};

export default Programms;