import React, { useState, useRef } from 'react';
import './CallDetails.css';
import { CallTimer } from './CallTimer';

const Name = () => {
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    const updateName = name => {
        setName(name);
        setIsEditing(false);
    }

    const input = useRef();

    const checkForEnter = event => {
        if (event.key === "Enter") {
            event.target.blur();
        }
    }

    const startEditing = () => {
        setIsEditing(true);
        setTimeout(() => input.current.focus(), 0);
    }

    if (isEditing || !name) {
        return <input ref={input} className="call-details__name-input" type="text" value={name} placeholder="Enter name here" onKeyPress={checkForEnter} onChange={event => setName(event.target.value)} onBlur={() => updateName(name)} />
    }

    return <span className="call-details__name-display" onClick={startEditing}>{name}</span>;
};

export const CallDetails = () => {
    return <div className="call-details">
        <div className="call-details__name">
            <Name />
        </div>
        <div className="call-details__call-controls">
            <CallTimer />
        </div>
    </div>;
};