import React, { useState } from 'react';
import './Situations.css';
import { config } from './config';

const situations = config.situations;

const Situation = ({ situation, response }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleVisibility = () => setIsOpen(!isOpen);

    return <div className="situation" onClick={toggleVisibility}>
        <div className={`situation__text ${isOpen ? "situation__text--open" : ""}`}>{situation}</div>
        <div className={`situation__response ${isOpen ? "situation__response--open" : ""}`}>{response}</div>
    </div>;
}

export const Situations = () => {
    return <div class="situations">
        {situations.map(s => <Situation key={s.situation} {...s} />)}
    </div>;
}