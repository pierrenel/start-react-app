import React,{ Component } from 'react';
import { TabBar } from 'antd-mobile';

import CSSModules from 'react-css-modules';
import styles from './app.scss';
@CSSModules(styles)

export default class App extends Component{
	constructor(props,context){
		super(props,context);

		this.state = {
			showTabBar: true,
			tabBarInfo: [
				{title: '首页',key: 'index',icon: require('assets/img/tabbar_index.png'),selectedIcon: require('assets/img/tabbar_index2.png')},
				{title: '活动',key: 'acty',icon: require('assets/img/tabbar_acty.png'),selectedIcon: require('assets/img/tabbar_acty2.png')},
				{title: '我的',key: 'mine',icon: require('assets/img/tabbar_mine.png'),selectedIcon: require('assets/img/tabbar_mine2.png')}
			]
		}
	}

	showTabBar = (path) => {
		let arr = this.state.tabBarInfo.map((e,i) => '/' + e.key);

		this.setState({
			showTabBar: arr.indexOf(path) > -1
		});
	}

	componentWillMount(){
		const { location } = this.props;

		this.showTabBar(location.pathname);
	}

    componentWillReceiveProps(nextProps){
		this.showTabBar(nextProps.location.pathname);
    }

	render(){
		let { children,location } = this.props;

		return(
			<div>
				{ children }

				<div styleName="tabBar-container">
					<TabBar noRenderContent={false} hidden={!this.state.showTabBar}>
						{this.state.tabBarInfo.map((e,i) => (
							<TabBar.Item
								title={e.title}
								key={e.key}
								selected={location.pathname.includes(e.key)}
								onPress={() => {
								    this.setState({
								    	selectedTab: e.key,
								    });

								    this.props.history.push('/' + e.key);
								}}	
								icon={<img src={e.icon} alt="" />}
								selectedIcon={<img src={e.selectedIcon} alt="" />}											
							/>
						))}										
					</TabBar>					
				</div>
			</div>	
		)
	}
}


