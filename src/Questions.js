import React, { useState } from 'react';
import './Questions.css';
import { config } from './config';

const questions = config.questions;

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
        <div className="questions__title">Questions to ask</div>
        {questions.map(q => <Question key={q.text} {...q} />)}
    </div>;
}
