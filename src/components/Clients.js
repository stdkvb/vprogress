import React from 'react';

function Clients() {
    return (
        <section className='clients'>
            <img className='clients__logo' src={require('../images/lukoil.png')} alt='логотип Лукойл'></img>
            <img className='clients__logo' src={require('../images/bashneft.png')} alt='логотип Башнефть'></img>
            <img className='clients__logo' src={require('../images/kashtan.png')} alt='логотип Каштановая роща'></img>
            <img className='clients__logo' src={require('../images/gazprom.png')} alt='логотип Газпром'></img>
            <img className='clients__logo' src={require('../images/surgut.png')} alt='логотип аэропорт Сургут'></img>
            <img className='clients__logo' src={require('../images/bst.png')} alt='логотип БСТ'></img>
        </section>
    );
};

export default Clients;