import React from 'react';
import About from './About';
import Benefits from './Benefits';
import Programms from './Programms';
import News from './News';

function Main() {
    return (
        <main className='content'>
            <About />
            <Programms />
            <Benefits />
            <News />
        </main>
    );
};

export default Main;