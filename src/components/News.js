import React from 'react';
import NewsCard from './NewsCard';

function News() {
    return (
        <section className='news'>
            <div className='news__top-bar'>
                <h3 className='news__title'>Пресс-центр</h3>
                <button className='news__button' type='button'>Все новости</button>
            </div>
            <NewsCard
                photo={require('../images/news_photo_1.png')}
                date={'31.05.2022'}
                title={'Как будет проходить Периодическая аккредитация в 2022 году?'}
            />
            <NewsCard
                photo={require('../images/news_photo_2.png')}
                date={'31.05.2022'}
                title={'Ученые выяснили, как настроение руководства влияет на сотрудников'}
            />
            <NewsCard
                photo={require('../images/news_photo_3.png')}
                date={'31.05.2022'}
                title={'Для образовательных программ установят золотой стандарт'}
            />
            <NewsCard
                photo={require('../images/news_photo_4.png')}
                date={'31.05.2022'}
                title={'Подписан закон об ужесточении требований к охране объектов ТЭК'}
            />
        </section>
    );
};

export default News;