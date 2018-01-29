import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Index_UI from './index.jsx';

function mapStateToProps(state,props){
	return {
		myInfo: state.login.myInfo
	}
}

function mapDispatchToProps(dispatch,props){
	return {				
						
	}
}

const Index = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Index_UI));

export default Index;