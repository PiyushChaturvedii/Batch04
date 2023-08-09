import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App appTitle="Person Manager" />);

// ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
// registerServiceWorker();
