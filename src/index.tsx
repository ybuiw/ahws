import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
//import App from './App';
// import App from './pages/login';
//import App from './pages/layouts';
//import App from './pages/page';

import { RouterContinar } from './components';

import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router: any[] = [
	{
		path: '/login',
		component: require('./pages/login'),
		meta: {
			title: '登陆'
		}
	},
	{
		path: '/layout',
		component: require('./pages/layouts'),
		children: [
			{
				path: '/page1',
				meta: { title: '页面1' },
				component: require('./pages/page'),
				children: [
					{
						path: '/page1/p1',
						component: require('./pages/page'),
						meta: {
							title: '页面1-1'
						}
					},
					{
						path: '/page1/p2',
						component: require('./pages/page'),
						meta: {
							title: '页面1-2'
						}
					},
				]
			},
			{
				path: '/page2',
				meta: { title: '页面1' },
				component: require('./pages/page'),
				children: [
					{
						path: '/page2/p1',
						meta: { title: '页面2-1' },
						component: require('./pages/page'),
					},
					{
						path: '/page2/p2',
						meta: { title: '页面2-2' },
						component: require('./pages/page')
					},
				]
			},
		]
	}
]

ReactDOM.render(
	<HashRouter>
		<Switch>
			<RouterContinar routes={router} />
			{/* <App /> */}
		</Switch>
	</HashRouter>,
	document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
