import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect,Route } from 'react-router-dom';
import { login_action } from 'store/action';

export default class AuthRoute extends Component{
	constructor(props,context){
		super(props,context);

		this.state = {
			didAuth: false,
			isAuth: false
		}
	}	

    static contextTypes = {
        store: PropTypes.object.isRequired,
    }

    doAuth(){
    	const store = this.context.store;
    	
		if(store.getState().login.myInfo){
			return new Promise((resolve,reject) => {
				resolve(true);
			})
		}else{
			return store.dispatch(login_action.reqMyInfo());
    	}
    }

    componentWillMount(){
		this.doAuth().then((res) => {
			this.setState({
				didAuth: true,
				isAuth: res
			});
		});
    }

	render(){
		const { component: Component,...rest } = this.props,
			{ didAuth,isAuth } = this.state;

		if(!didAuth) return null;

		return(		
			<Route {...rest} render={ (props) => (
				isAuth ? <Component {...props} /> : (
					<Redirect to={{
						pathname: '/login',
						state: { from: props.location }
					}} />					
				)
			)} />						
		);
	}	
}
