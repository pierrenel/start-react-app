import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Acty_UI from './acty';
import { acty_action } from 'store/action';

function mapStateToProps(state,props){
	return {
		isRefreshing: state.acty.isRefreshing,
		isLoadingMore: state.acty.isLoadingMore,
		dataSource: state.acty.dataSource				
	}
}

function mapDispatchToProps(dispatch,props){
	return {
		pullDown(){
			dispatch(acty_action.pullDown());
		},
		pullUp(){
			dispatch(acty_action.pullUp());
		}		
	}
}

const Acty = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Acty_UI));

export default Acty;