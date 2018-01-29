import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import Login_UI from './login';
import { login_action } from 'store/action';

function mapStateToProps(state,props){
	return {

	}
}

function mapDispatchToProps(dispatch,props){
	return {				
		submit(){
        	const { username,passwd } = this.state;

        	if(!username || !passwd){
            	Toast.fail('用户名或密码不能为空',2);
            }else{
				dispatch(login_action.reqLogin(username,passwd)).then(() => {
					props.history.push('/index');
				});
            }	
		}							
	}
}

const Login = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login_UI);

export default Login;