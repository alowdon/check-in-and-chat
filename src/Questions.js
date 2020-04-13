import React, { useState } from 'react';
import './Questions.css';

const questions = [
    {
        text: "How are you doing today?"
    },
    {
        text: "Are you managing to get around the house OK?"
    },
    {
        text: "How are you feeling today?"
    },
    {
        text: "Have you managed to speak to any of your friends or family?"
    },
    {
        text: "What is a typical day like for you? Do you enjoy reading or watching TV?"
    },
    {
        text: "Are you managing to prepare your meals?"
    },
    {
        text: "Do you have all the medication you need?"
    },
    {
        text: "Are you able to get out to the garden for some fresh air?",
    }
];

const QuestionStatus = Object.freeze({
    Pending: 'pending',
    Completed: 'completed',
    Attention: 'attention'
});

export const Question = ({ text }) => {
    const [status, setStatus] = useState(QuestionStatus.Pending);

    return <div className={`question ${status ? `question--${status.toString().toLowerCase()}` : ""}`}>
        <div className="question__content">
            <div className="question__text">{text}</div>
            <div className="question__actions">
                <button
                    className={`question-button question-button--completed ${status === QuestionStatus.Completed ? "question-button--selected" : ""}`}
                    onClick={() => setStatus(QuestionStatus.Completed)}>All good</button>
                <button
                    className={`question-button question-button--attention ${status === QuestionStatus.Attention ? "question-button--selected" : ""}`}
                    onClick={() => setStatus(QuestionStatus.Attention)}>Needs assistance</button>
            </div>
        </div>
        <div className={`question__notes ${status === QuestionStatus.Attention ? 'question__notes--open' : ''}`}>
            <textarea className="question__notes-textarea" placeholder="Write any notes here"></textarea>
        </div>
    </div>;
}

export const Questions = () => {
    return <div className="questions">
        <div className="questions__summary">
            <p>
                Introduce yourself and let the person know that you are a volunteer who is supporting the NHS Volunteer Responders
                programme. You are calling to check in with the person to chat and make sure they are OK.
            </p>
            <p>
                It’s difficult to pre-empt what types of calls or queries you are likely to get from an individual; they may need
                some factual information or just some reassurance during these challenging times. Rest assured that there will be
                people available to support you if you are faced with a query that raises concerns. Contact the Support Team if
                you have concerns over the people you are supporting.
            </p>
        </div>
        {questions.map(q => <Question key={q.text} {...q} />)}
    </div>;
}
