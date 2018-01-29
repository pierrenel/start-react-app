import React,{ Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'; 
import createHistory from './createHistory';

import App from '../components/app';
import Common from '../components/common';
import Login from '../components/login';
import Index from '../components/index';
import Acty from '../components/acty';
import Mine from '../components/mine';

// 认证路由
import Auth from './auth';

// 按需加载
// import Bundle from './bundle';
// const AsyncContainer = import('../components/Async');
// const Async = (props) => (
//     <Bundle load={() => AsyncContainer}>
//         {(Async) => <Async {...props} />}
//     </Bundle>	
// );

export default class Router extends Component{
	render(){
		return(			
			<ConnectedRouter history={createHistory}>				
				<App>
					<Route path="/" component = { Common } />
					<Switch>
						<Redirect exact from="/" to="/index" />
						<Route path="/login" component = { Login } />
						<Auth path="/index" component = { Index } />
						<Route path="/acty" component = { Acty } />
						<Auth path="/mine" component = { Mine } />
					</Switch>
				</App>
			</ConnectedRouter>							
		);
	}	
}

