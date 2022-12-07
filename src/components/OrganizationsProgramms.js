import React from 'react';
import Accordion from './Accordion';

function OrganizationsProgramms() {

    return (
        <div className='programms__content'>
            <div className='programms__discount'>
                <span className='programms__discount-text'>Получите моментальный рассчет стоимости обучения с выгодой до 70%</span>
                <button className='programms__discount-button'>Получить скидку</button>
            </div>
            <div className='programms__tabs-list'>
                <Accordion title='Охрана труда' imageUrl={require('../images/ohrana_truda.png')} />
                <Accordion title='Промышленная безопасность' imageUrl={require('../images/prombez.png')} />
                <Accordion title='Пожарная безопасность' imageUrl={require('../images/pozhbez.png')} />
                <Accordion title='Электроэнергетика и электробезопасность' imageUrl={require('../images/elektrobez.png')} />
                <Accordion title='Экологическая безопасность' imageUrl={require('../images/ecobez.png')} />
                <Accordion title='Транспортная безопасность' imageUrl={require('../images/transbez.png')} />
                <Accordion title='Строительство' imageUrl={require('../images/stroyka.png')} />
                <Accordion title='Рабочие специальности' imageUrl={require('../images/tools.png')} />
                <Accordion title='Курсы' imageUrl={require('../images/courses.png')} />
            </div>
        </div>
    )
};

export default OrganizationsProgramms;