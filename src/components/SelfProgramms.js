import React from 'react';
import helmet from '../images/helmet.png';
import graph from '../images/graph.png';
import diploma from '../images/diploma.png';
import books from '../images/books.png';

function SelfProgramms() {
    return (
        <div className='programms__content'>
            <div className='programms__card' style={{backgroundImage: `url(${helmet})`}}>
                <h3 className='programms__card-title'>Рабочие специальности</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Бурильщик эксплуатационного и разведочного бурения скважин на нефть и газ</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Вышкомонтажник-сварщик</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Помощник бурильщика эксплуатационного и разведочного бурения скважин на нефть и газ (первый)</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link programms__card-list-link_grey'>Все программы  {'>'}</span></li>
                </ul>
            </div>
            <div className='programms__card' style={{backgroundImage: `url(${graph})`}}>
                <h3 className='programms__card-title'>Повышение квалификации</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Повышение квалификации по программе "Антитеррористическая безопасность".</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Повышение квалификации в Строительстве.</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Повышение квалификации в области безопасности дорожного движения.</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link programms__card-list-link_grey'>Все программы  {'>'}</span></li>
                </ul> 
            </div>
            <div className='programms__card programms__card_high' style={{backgroundImage: `url(${diploma})`}}>
                <h3 className='programms__card-title'>Профессиональная переподготовка</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Осуществление, контроль и управление закупками для обеспечения государственных, муниципальных и корпоративных нужд</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Диспетчер автомобильного и городского наземного электрического транспорта.</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link programms__card-list-link_grey'>Все программы  {'>'}</span></li>
                </ul> 
            </div>
            <div className='programms__card programms__card_high' style={{backgroundImage: `url(${books})`}}>
                <h3 className='programms__card-title'>Курсы</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Допуск к работе по обработке оборудования насыщенным паром высокого давления.</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Курсы целевого назначения для персонала, выполняющего газоопасные работы (допуск к выполнению газоопасных работ).</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link'>Курсы целевого назначения для операторов по добыче нефти и газа к газлифтной эксплуатации скважин и выполнению газоопасных работ.</span></li>
                    <li className='programms__card-list-item'><span className='programms__card-list-link programms__card-list-link_grey'>Все программы  {'>'}</span></li>
                </ul> 
            </div>
        </div>
    )
};

export default SelfProgramms;