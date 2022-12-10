import React from 'react';
import Popup from './Popup';
import license1 from '../images/license_1.jpg';
import license2 from '../images/license_2.jpg';
import license3 from '../images/license_3.jpg';
import license4 from '../images/license_4.jpg';


function Licenses() {
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [image, setImage] = React.useState('');
    
    function handleClick(e) {
        setPopupOpen(true);
        setImage(e.target.closest('img').getAttribute('src'));
    }

    function handleClose() {
        setPopupOpen(false);
    }

    return (
    <>
        <section className='licenses'>
            <h2 className='licenses__title'>Лицензии на образовательную деятельность</h2>
            <div className='licenses__container'>
                <img className='licenses__image' src={license1} alt='лицензия' onClick={handleClick}></img>
                <img className='licenses__image' src={license2} alt='лицензия' onClick={handleClick}></img>
                <img className='licenses__image' src={license3} alt='лицензия' onClick={handleClick}></img>
                <img className='licenses__image' src={license4} alt='лицензия' onClick={handleClick}></img>
            </div>
        </section>
        <Popup
            isOpen={isPopupOpen}
            image={image}
            onClose={handleClose}
        />
    </>

    );
};

export default Licenses;