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
        <p>
            Thank you for offering your time to provide telephone support to a person who is isolating. A check in
            and chat call can make all the difference to someone who is lonely at this time.
        </p>

        <p>
            Telephone support is a positive step to engage with people who may have little or no contact with others,
            a consequence of self-isolating may lead to issues with confidence, self-esteem, and loneliness.
        </p>

        <p>
            This support you will be giving is a one-off phone call that can be flexible to suit the time you have available
            to give, and also the time that the interaction takes place. The aim is to ensure that the wellbeing of the
            isolated person is taken into consideration and possibly identify any practical support they may require.
        </p>

        <ol className="hints-and-tips__list">
            {hints.map(hint => <li key={hint} className="hints-and-tips__item">{hint}</li>)}
        </ol>
    </div>
}