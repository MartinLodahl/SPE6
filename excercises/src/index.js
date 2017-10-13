import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import NewClass from './new';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import Img from './img';

//Excercise 1 (IMGs)
ReactDOM.render(<Img />, document.getElementById('root'));
//Excercise 2 (lifting up)
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
