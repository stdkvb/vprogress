import React from 'react';

function Popup(props) {

    return (
      <div className={`popup ${props.isOpen && 'popup_opened'}`}>
        <div className='popup__container'>          
            <button className='popup__close-button' type='button' onClick={props.onClose}></button>
            <img className='popup__image' src={props.image} alt=''></img>
        </div>
      </div>
    );
}
  
export default Popup;
  