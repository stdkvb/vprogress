import React from 'react';
import About from './About';
import Benefits from './Benefits';
import Programms from './Programms';
import News from './News';
import Licenses from './Licenses';
import Clients from './Clients';

function Main() {
    return (
        <main className='content'>
            {/* <About />
            <Programms />
            <Benefits />
            <News /> */}
            <Licenses />
            <Clients />
        </main>
    );
};

export default Main;