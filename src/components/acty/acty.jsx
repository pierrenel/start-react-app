import React,{ Component } from 'react';
import { NavBar,ListView,PullToRefresh } from 'antd-mobile';

import CSSModules from 'react-css-modules';
import styles from './acty.scss';
@CSSModules(styles)

export default class Acty extends Component{
    constructor(props,context){
        super(props,context)
    }

    back = () => {
        this.props.history.goBack();
    }

    componentWillMount(){
        const { pullDown } = this.props;
        pullDown();
    }

    render(){
        let { isRefreshing,isLoadingMore,dataSource,pullDown,pullUp } = this.props;      

        if(!dataSource._dataBlob) return null;

        return (<div>
            <NavBar leftContent="返回"
                onLeftClick={this.back}
            >活动列表</NavBar> 

            {!dataSource._dataBlob.s1.length
                ? <p styleName="default-text">还没有活动~</p>
                :(<ListView styleName="item-container"
                    ref={el => this.lv = el}

                    renderFooter={() =>isLoadingMore && <p style={{textAlign: 'center'}}>正在加载</p> }

                    dataSource={dataSource}

                    renderRow={(rowData,sectionId,rowId) => {
                        return (
                            <div className={styles.item}>
                                <p>{rowData.city}</p>
                                <p>{rowData.county}</p>
                                <p>{rowData.desc}</p>
                            </div>
                        )
                    }}

                    onEndReached={(event) => {
                        !isLoadingMore && pullUp();
                    }}
                    onEndReachedThreshold={10}

                    pullToRefresh={<PullToRefresh
                        refreshing={isRefreshing}
                        onRefresh={() => {
                            pullDown();
                        }}
                        indicator={{
                            activate: '松开即可刷新'
                        }}   
                    />}                          
                />)
            } 
        </div>)      
    }
}