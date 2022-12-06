import React from 'react';
import Accordion from './Accordion';

function OrganizationsProgramms() {
    
    const accordionData = [
        {
            title: 'Охрана труда',
        },
        {
            title: 'Промышленная безопасность',

        },
        {
            title: 'Пожарная безопасность',

        },
        {
            title: 'Электроэнергетика и электробезопасность',

        },
        {
            title: 'Экологическая безопасность',

        },
        {
            title: 'Транспортная безопасность',

        },
        {
            title: 'Строительство',

        },
        {
            title: 'Рабочие специальности',

        },
        {
            title: 'Курсы',

        },

    ]

    return (
        <div className='programms__content'>
            <div className='programms__discount'>
                <span className='programms__discount-text'>Получите моментальный рассчет стоимости обучения с выгодой до 70%</span>
                <button className='programms__discount-button'>Получить скидку</button>
            </div>
            <div className='programms__tabs-list'>
                {accordionData.map(({ title, imageUrl }) => (
                    <Accordion title={title} imageUrl={imageUrl} />
                ))}
            </div>
        </div>
    )
};

export default OrganizationsProgramms;