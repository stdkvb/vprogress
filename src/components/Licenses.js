import React from 'react';

function Licenses() {
    return (
        <section className='licenses'>
            <h2 className='licenses__title'>Лицензии на образовательную деятельность</h2>
            <div className='licenses__container'>
                <img className='licenses__image' src={require('../images/license_1.png')} alt='лицензия'></img>
                <img className='licenses__image' src={require('../images/license_2.png')} alt='лицензия'></img>
                <img className='licenses__image' src={require('../images/license_3.png')} alt='лицензия'></img>
                <img className='licenses__image' src={require('../images/license_4.png')} alt='лицензия'></img>
            </div>
        </section>
    );
};

export default Licenses;