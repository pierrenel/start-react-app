import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import App_UI from './app';

function mapStateToProps(state,props){
	return {

	}
}

function mapDispatchToProps(dispatch,props){
	return {

	}
}

const App = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(App_UI));

export default App;