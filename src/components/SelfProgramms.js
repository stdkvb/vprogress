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
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Бурильщик эксплуатационного и разведочного бурения скважин на нефть и газ</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Вышкомонтажник-сварщик</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Помощник бурильщика эксплуатационного и разведочного бурения скважин на нефть и газ (первый)</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link programms__card-list-link_grey' href=''>Все программы  {'>'}</a></li>
                </ul>
            </div>
            <div className='programms__card' style={{backgroundImage: `url(${graph})`}}>
                <h3 className='programms__card-title'>Повышение квалификации</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Повышение квалификации по программе "Антитеррористическая безопасность".</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Повышение квалификации в Строительстве.</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Повышение квалификации в области безопасности дорожного движения.</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link programms__card-list-link_grey' href=''>Все программы  {'>'}</a></li>
                </ul> 
            </div>
            <div className='programms__card programms__card_high' style={{backgroundImage: `url(${diploma})`}}>
                <h3 className='programms__card-title'>Профессиональная переподготовка</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Осуществление, контроль и управление закупками для обеспечения государственных, муниципальных и корпоративных нужд</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Диспетчер автомобильного и городского наземного электрического транспорта.</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link programms__card-list-link_grey' href=''>Все программы  {'>'}</a></li>
                </ul> 
            </div>
            <div className='programms__card' style={{backgroundImage: `url(${books})`}}>
                <h3 className='programms__card-title'>Курсы</h3>
                <ul className='programms__card-list'>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Допуск к работе по обработке оборудования насыщенным паром высокого давления.</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Курсы целевого назначения для персонала, выполняющего газоопасные работы (допуск к выполнению газоопасных работ).</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link' href=''>Курсы целевого назначения для операторов по добыче нефти и газа к газлифтной эксплуатации скважин и выполнению газоопасных работ.</a></li>
                    <li className='programms__card-list-item'><a className='programms__card-list-link programms__card-list-link_grey' href=''>Все программы  {'>'}</a></li>
                </ul> 
            </div>
        </div>
    )
};

export default SelfProgramms;