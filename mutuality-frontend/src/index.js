import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'mdbootstrap/css/mdb.css'
import 'mdbootstrap/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
