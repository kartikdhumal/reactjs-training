import React from 'react'
import Header from './Header'
import Button from './Button';
import '../styles/home.scss'

function Home() {

    function handler() {
        console.log("You Clicked me Dost");
    }

    return (
        <div className='container'>
            <p className='title'>Hello, React!</p>
            <Button label={"Click"} handler={handler} />
        </div>
    )
}

export default Home
