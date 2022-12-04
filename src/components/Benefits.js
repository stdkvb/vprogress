import React from 'react';
import icon_1 from '../images/benefits_icon_1.svg';
import icon_2 from '../images/benefits_icon_2.svg';
import icon_3 from '../images/benefits_icon_3.svg';
import icon_4 from '../images/benefits_icon_4.svg';
import icon_5 from '../images/benefits_icon_5.svg';
import icon_6 from '../images/benefits_icon_6.svg';
import icon_7 from '../images/benefits_icon_7.svg';
import icon_8 from '../images/benefits_icon_8.svg';
import icon_9 from '../images/benefits_icon_9.svg';

function Benefits() {
    return (
        <section className='benefits'>
            <h2 className='benefits__title'>Преимущества обучения в «VPROGRESS»</h2>
            <div className='benefits__container'>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_1} alt=''></img>
                    <h3 className='benefits__card-title'>Авторские программы</h3>
                    <p className='benefits__card-description'>Обучаем только по авторским программам, которые разрабатываем сами на базе многолетнего практического опыта и исходя из потребностей заказчиков.</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_2} alt=''></img>
                    <h3 className='benefits__card-title'>10 лет опыта</h3>
                    <p className='benefits__card-description'>Обладаем многолетним опытом обучения специалистов в различных сферах.</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_3} alt=''></img>
                    <h3 className='benefits__card-title'>Только актуальные программы</h3>
                    <p className='benefits__card-description'>Постоянно ведем мониторинг рынка и на основе полученных данных актуализируем наши учебные программы.</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_4} alt=''></img>
                    <h3 className='benefits__card-title'>Квалифицированные преподаватели</h3>
                    <p className='benefits__card-description'>Все преподаватели являются специалистами-практиками в тех направлениях, о которых рассказывают на курсах.</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_5} alt=''></img>
                    <h3 className='benefits__card-title'>Современные методы обучения</h3>
                    <p className='benefits__card-description'>Используем только современные методы обучения, собственные наработки, сформированные за время функционирования организации.</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_6} alt=''></img>
                    <h3 className='benefits__card-title'>Документы гособразца</h3>
                    <p className='benefits__card-description'>Обеспечиваем гарантированный результат вашего обучения и вносим документы в Федеральный реестр</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_7} alt=''></img>
                    <h3 className='benefits__card-title'>Оптимальные цены</h3>
                    <p className='benefits__card-description'>Предоставляем образовательные услуги по адекватным и понятным ценам</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_8} alt=''></img>
                    <h3 className='benefits__card-title'>Минимальные сроки обучения</h3>
                    <p className='benefits__card-description'>Обучаем только по авторским программам, которые разрабатываем сами на базе многолетнего практического опыта и исходя из потребностей заказчиков</p>
                </div>
                <div className='benefits__card'>
                    <img className='benefits__card-icon' src={icon_9} alt=''></img>
                    <h3 className='benefits__card-title'>Работаем по всей стране></h3>
                    <p className='benefits__card-description'>Работаем по всей России и имеем офисы более чем в 10 городах</p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;