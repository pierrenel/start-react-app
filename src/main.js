// 引入调试工具
if(process.env.myEnv != 'normal'){
	let eruda = require('eruda');
	eruda.init();
}

// 引入基础类库和配置文件
import React,{ Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './store';

// 加载全局样式
import 'assets/styles/iconfont/font.css';    
import 'assets/styles/global.scss';    
// 加载自定义插件
import 'utils/plugin';

// 点击延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

// 初始化store对象
const store = configureStore();

// 自定义函数，将组件加载到DOM元素
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

// 加载路由组件
renderToDOM(Router);

// 添加HMR功能
if (module.hot) {
	module.hot.accept('./router', () => {
		renderToDOM(Router);
	});
}



