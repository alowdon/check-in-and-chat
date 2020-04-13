import React, { useState } from 'react';
import './Information.css';
import { Situations } from './Situations';

const InformationPanel = Object.freeze({
    HintsAndTips: 'hintsAndTips',
    Dementia: 'dementia',
    MentalHealth: 'mentalHealth',
    Situations: 'situations',
});

export const Information = () => {
    const [panel, setPanel] = useState(InformationPanel.HintsAndTips);

    let panelElement = <Situations />;
    let title;

    switch (panel) {
        default:
            title = "Potential questions and situations that may arise";
            break;
    }

    return <div className="information">
        <div className="information__title">{title}</div>
        {panelElement}
    </div>;
}