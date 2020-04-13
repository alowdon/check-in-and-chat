import React from 'react';
import './HintsAndTips.css';

const hints = [
    "Calls should be made at times that are mutually convenient to both the isolating person and yourself.",
    "It is important to uphold the confidentiality of the individual at all times. You may receive/hear personal information or details through conversations, forms or other means. All forms of personal information must be treated with respect and be handled in a highly confidential way.",
    "We recommend calling from a landline number, unless you have free minutes available on a mobile phone and are willing to use these.",
    "Ensure you withhold your number. To withhold your number on individual calls just dial 141 before the telephone number you want to call.",
    "Think about how you safely store people's contact details; do not leave these in a place that other people can access. If you are able to lock these away in a safe place, please do so. If you need to destroy this information please ensure it is shredded in a confidential manner.",
    "If you choose to continue to support an individual over the telephone and offer this personal act of kindness, this is a personal choice and will not be under the arrangement of Royal Voluntary Service.",
    "The person you're supporting could be at risk of isolation for any reason, including cognitive difficulties or dementia. Be aware that when you have a conversation you may need to repeat yourself, revisit elements of the conversation or communicate more clearly than you may be used to in order to have a successful chat.",
];

export const HintsAndTips = () => {
    return <div className="hints-and-tips">
        <ol className="hints-and-tips__list">
            {hints.map(hint => <li key={hint} className="hints-and-tips__item">{hint}</li>)}
        </ol>
    </div>
}