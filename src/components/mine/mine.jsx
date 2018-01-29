import React,{ Component } from 'react';
import { NavBar,List } from 'antd-mobile';
const Item = List.Item;

import CSSModules from 'react-css-modules';
import styles from './mine.scss';
@CSSModules(styles)

export default class Acty extends Component{
    constructor(props,context){
        super(props,context)
    }

    back = () => {
        this.props.history.goBack();
    }

    render(){  
        const { myInfo,tapNavBar} = this.props;

        return (<div>
            <NavBar leftContent="返回" rightContent="退出"
                onLeftClick={this.back}
                onClick={tapNavBar}
            >个人中心</NavBar> 

            <div styleName="info">
                <div styleName="avatar-container">
                    <img src={require('assets/img/avatar.png')} alt="" /> 
                    <img styleName="avatar" src={myInfo.avatar} alt="" />         
                </div>
                <div styleName="username-email">
                    <div>{'姓名：' + myInfo.username}</div>
                    <div>{'邮箱：' + myInfo.email}</div>
                </div>
            </div>

            <List>
                <Item 
                    extra="官方文档"
                    arrow="horizontal" 
                    onClick={() => {location.href = 'https://reactjs.org/docs/hello-world.html'}}
                >React</Item>
                <Item 
                    extra="github地址"
                    arrow="horizontal" 
                    onClick={() => {location.href = 'https://github.com/ElemeFE/mint-ui'}}
                >Antd Mobile</Item>
                <Item 
                    extra="前去点赞"
                    arrow="horizontal" 
                    onClick={() => {location.href = 'https://github.com/brandonhulala/start-react-app'}}
                >start-react-app</Item>                
            </List>            
        </div>)      
    }
}