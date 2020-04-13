import React from 'react';
import './App.css';
import { Questions } from './Questions';
import { CallDetails } from './CallDetails';
import { Information } from './Information';

function App() {
  return (
    <div className="container">
      <div className="header">
        <CallDetails />
        <a href="https://digital.nhs.uk/" target="_blank" rel="noopener noreferrer">
          <img className="nhs-logo" src="nhs.png" alt="NHS Digital" />
        </a>
      </div>
      <div className="content">
        <Questions />
        <Information />
      </div>
      <div className="footer">
        <div className="support-number">Support Team: 0808 196 3382</div>
        <a className="acceleratech-link" href="https://acceleratech.uk/" target="_blank" rel="noopener noreferrer">
          <img className="acceleratech-logo" src="acceleratech.png" alt="acceleratech" />
        </a>
      </div>
    </div>
  );
}

export default App;
