import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './dealers.json';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
