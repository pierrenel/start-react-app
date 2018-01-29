import React,{ Component } from 'react';
import { List,InputItem,Button } from 'antd-mobile';

import CSSModules from 'react-css-modules';
import styles from './login.scss';
@CSSModules(styles)

export default class Login extends Component{
	constructor(props,context){
		super(props,context);

		this.state = {
			username: '',
			passwd: ''
		}
	}

	iptUsername = (val) => {
		this.setState({
			username: val
		});
	}
	iptPasswd = (val) => {
		this.setState({
			passwd: val
		});
	}	

	render(){
		const { submit } = this.props;

		return ( 
			<div>
				<h3>请先登录</h3>
				<div styleName="form">
					<List styleName="cells">
						<InputItem placeholder="请输入账号" clear onChange={this.iptUsername}>用户名</InputItem>
						<InputItem placeholder="请输入密码" clear onChange={this.iptPasswd}>密码</InputItem>
	        		</List>		
					<Button styleName="submit" type="primary" onClick={submit.bind(this)}>提交</Button>
				</div>
			</div>
		)
	}
}

