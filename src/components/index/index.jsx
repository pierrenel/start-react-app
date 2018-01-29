import React,{ Component } from 'react';
import classNames from 'classnames';
import { Button } from 'antd-mobile';

import CSSModules from 'react-css-modules';
import styles from './index.scss';
@CSSModules(styles)

export default class Index extends Component{
	constructor(props,context){
		super(props,context);
	}

	toLogin = () => {
		this.props.history.push('/login');
	}

	render(){
		let { myInfo } = this.props;

		return ( 
			<div>
		        <div styleName="statusBar">
		            <h3>{'你好啊，' + (myInfo? myInfo.username : '路人')}</h3>
		            {!myInfo && <Button type="primary" onClick={this.toLogin}>登录</Button>}            
		        </div>  
		        <i styleName="icon" className={classNames('iconfont','icon-toys')}></i>
		        <img styleName="cover" src={require('assets/img/cover.jpg')} alt="" />
			</div>
		)
	}
}

