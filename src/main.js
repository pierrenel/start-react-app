// use eruda as a devtool
if(process.env.myEnv != 'normal'){
	let eruda = require('eruda');
	eruda.init();
}

import React,{ Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './store';

// global style
import 'assets/styles/iconfont/font.css';    
import 'assets/styles/global.scss';    
// custom plugin
import 'utils/plugin';

// handle click delay
const FastClick = require('fastclick');
FastClick.attach(document.body);

// initialize redux store
const store = configureStore();

// load component to DOM ele
const renderToDOM = (Component) => {
	render(
		<AppContainer warnings={false}>
			<Provider store = {store}>
				<Component />
			</Provider>
		</AppContainer>,	
		document.getElementById('app')
	);
};

// load router
renderToDOM(Router);

// add HMR
if (module.hot) {
	module.hot.accept('./router', () => {
		renderToDOM(Router);
	});
}



