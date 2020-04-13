import React, { useState } from 'react';
import './Situations.css';

const situations = [
    {
        situation: "I'm concerned that I'm not going to see anyone for a long time.",
        response: "Recognise their concerns and let them that you are here to listen them. It's ok to go outside if they have a garden and get some fresh air and they can exercise outside as well, keeping the 2 metre minimum distance."
    },
    {
        situation: "I need some practical help, I can't get to the shops or get my prescription.",
        response: "Contact the Support Team so the individual can be referred to a Community Response Volunteer."
    },
    {
        situation: "I've been told to stay at home but I always go to the community centre on a Wednesday, can I still go?",
        response: "If you have been told to stay at home we recommend you follow the guidance from the NHS. Community centres are closed at this time. You can still go out in your garden if you have one and for exercise only, you must keep 2 metres away from any other people."
    },
    {
        situation: "I like talking to you, can you call me again next week?",
        response: "That's lovely to hear, I've enjoyed talking with you too but I'm unable to call frequently. If the person who referred you has asked that you receive a check in call frequently then you'll hear from another volunteer, but that may not be me. Would you like me to check whether you have this arranged and if not, arrange this for you? Contact the Support Team to check whether the individual has more call requests logged and if not, place a request for weekly/monthly calls (dependent on what the individual has asked for)."
    },
    {
        situation: "Can I take down your phone number, so I can call you if I need anything?",
        response: "Establish what they mean by 'need anything' i.e. is this practical support we can offer by matching them with a Community Response Volunteer. Politely tell the individual that you are not permitted to give out your personal contact details."
    },
    {
        situation: "I'm lonely and I don't have anyone I can call.",
        response: "Ask who they would usually talk to/spend time with and see if they can contact any of these people via phone."
    },
    {
        situation: "I'm worried about my neighbour, can you call them if I give you their number?",
        response: "At the moment we are only able to support people that have been referred to us from a Health board, GP or the NHS. I would suggest your neighbour could call 111 or speak to their GP if they have concerns about their health and wellbeing."
    },
    {
        situation: "I'm feeling very sad/depressed/hopeless, I think I need some help.",
        response: "Talk to them to understand their needs; do they need practical support, we could see if there is a volunteer available to do this. If required, call the Support Team to refer the individual for practical support. Or suggest they speak to their GP."
    },
];

const Situation = ({ situation, response, isActive, setActiveSituation }) => {
    return <div className="situation" onClick={() => setActiveSituation(isActive ? null : situation)}>
        <div className={`situation__text ${isActive ? "situation__text--open" : ""}`}>{situation}</div>
        <div className={`situation__response ${isActive ? "situation__response--open" : ""}`}>{response}</div>
    </div>;
}

export const Situations = () => {
    const [activeSituation, setActiveSituation] = useState(null);

    return <div className="situations">
        {situations.map(s => <Situation
            key={s.situation}
            isActive={s.situation === activeSituation}
            setActiveSituation={setActiveSituation}
            {...s} />)}
    </div>;
}