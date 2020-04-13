import React, { useState } from 'react';
import './Information.css';
import { Situations } from './Situations';
import { HintsAndTips } from './HintsAndTips';
import { Dementia } from './Dementia';
import { MentalHealth } from './MentalHealth';

const InformationPanel = Object.freeze({
    HintsAndTips: 'hintsAndTips',
    Dementia: 'dementia',
    MentalHealth: 'mentalHealth',
    Situations: 'situations',
});

const panels = (() => {
    const map = new Map();

    map.set(InformationPanel.HintsAndTips, "Hints and Tips");
    map.set(InformationPanel.Dementia, "Dementia");
    map.set(InformationPanel.MentalHealth, "Mental Health");
    map.set(InformationPanel.Situations, "Potential Situations");

    return map;
})();

export const Information = () => {
    const [panel, setPanel] = useState(InformationPanel.HintsAndTips);

    let panelElement = <HintsAndTips />;

    switch (panel) {
        case InformationPanel.Dementia:
            panelElement = <Dementia />;
            break;
        case InformationPanel.Situations:
            panelElement = <Situations />;
            break;
        case InformationPanel.MentalHealth:
            panelElement = <MentalHealth />;
            break;
    }

    const tabs = [];
    panels.forEach((t, p) => tabs.push(<div key={t} className={`information__tab ${p === panel ? `information__tab--active` : ""}`} onClick={() => setPanel(p)}>{t.toUpperCase()}</div>));

    return <div className="information">
        <div className="information__tabs">
            {tabs}
        </div>
        <div className="information__content">
            {panelElement}
        </div>
    </div>;
}