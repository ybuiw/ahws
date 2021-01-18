import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
//import App from './App';
// import App from './pages/login';
import App from './pages/layouts';
//import App from './pages/page';
import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<App />
		</Switch>
	</HashRouter>,
	document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
