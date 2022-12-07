import React, { useState } from 'react';
import tabIcon from '../images/tab-icon.svg';
import tabIcon_active from '../images/tab-icon_active.svg';

function Accordion({ title, imageUrl }) {
    const [isActive, setIsActive] = useState(false);

    return (<>
                {!isActive &&
                <div className='programms__tab-item' onClick={() => setIsActive(!isActive)}>
                    <h3 className={`programms__tab-title ${isActive ? 'programms__tab-title_active' : ''}`}>{title}</h3>
                    <img className='programms__tab-icon' src={tabIcon}></img>                    
                </div>
                }
                {isActive && 
                    <div className='programms__tab-content' style={{backgroundImage: `url(${imageUrl})`}}>
                        <h3 className='programms__tab-title programms__tab-title_active'>{title}</h3>
                        <a className='programms__tab-link'>Общие вопросы охраны труда для руководителей и специалистов предприятий.</a>
                        <a className='programms__tab-link'>Общие вопросы охраны труда для рабочих организаций (предприятий).</a>
                        <a className='programms__tab-link'>Оказание первой помощи при несчастных случаях на производстве.</a>                    
                        <a className='programms__tab-link'>Все программы {'>'}</a>
                        <img className='programms__tab-icon programms__tab-icon_active' src={tabIcon_active} onClick={() => setIsActive(!isActive)}></img>
                    </div>
                }
            </>
    )
}

export default Accordion;