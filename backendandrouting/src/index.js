import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CarApp from './carapp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CarApp />, document.getElementById('root'));
registerServiceWorker();
