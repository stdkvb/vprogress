import React from 'react';
import About from './About';
import Benefits from './Benefits';
import Programms from './Programms';


function Main() {
    return (
        <main className='content'>
            <About />
            <Programms />
            <Benefits />
        </main>
    );
};

export default Main;