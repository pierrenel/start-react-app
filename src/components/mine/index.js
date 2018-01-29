import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Mine_UI from './mine';

function mapStateToProps(state,props){
	return {
		myInfo: state.login.myInfo
	}
}

function mapDispatchToProps(dispatch,props){
	return {
		tapNavBar(event){
	        if(event.target.getAttribute('class') == 'am-navbar-right'){
	            dispatch({
	            	type: 'reqMyInfo',
	            	payload: null
	            });
	            localStorage.removeItem('token');
	            props.history.replace('/login');            
	        }			
		}
	}
}

const Mine = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Mine_UI));

export default Mine;