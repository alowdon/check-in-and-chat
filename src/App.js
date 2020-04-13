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
      </div>
      <div className="content">
        <Questions />
        <Information />
      </div>
      <div className="footer">
        <div className="support-number">Support Team: 0808 196 3382</div>
      </div>
    </div>
  );
}

export default App;
