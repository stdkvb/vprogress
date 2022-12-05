import React from 'react';

function NewsCard(props) {
    return (
        <div className='news__card'>
            <img className='news__card-photo' src={props.photo} alt=''></img>
            <p className='news__card-date'>{props.date}</p>
            <p className='news__card-title'>{props.title}</p>
        </div>
    );
};

export default NewsCard;