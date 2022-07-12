import React from 'react';
import './Animate.css';
import water from '../../Assets/water.png'
import earth from '../../Assets/earth.png'
import fire from '../../Assets/fire.png'
import wind from '../../Assets/wind.png'

export const Animate = () => {
    return (
        <section className="Animate">
            <img src={water} alt="water" />
            <img src={earth} alt="earth" />
            <img src={fire} alt="fire" />
            <img src={wind} alt="wind" />
        </section>
    )
}
