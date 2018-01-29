import { createStore,combineReducers,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { routerReducer,routerMiddleware,push } from 'react-router-redux';
import reducer_obj from './reducer'; 
import createHistory from '../router/createHistory';

let middlewares = [ReduxThunk,routerMiddleware(createHistory)];

if(process.env.myEnv === 'dev'){
	const Logger  = require('redux-logger').default;
	middlewares = [...middlewares,Logger];
}

const configureStore = () => {
	const reducer_fn = combineReducers({
		...reducer_obj,
		router: routerReducer
	});

	const store = createStore(
		reducer_fn,
		applyMiddleware(...middlewares)
	);	

	if(module.hot){
		module.hot.accept('./reducer', () => {
		    const nextReducer_obj = require('./reducer').default;
		    const nextReducer_fn = combineReducers({
				...nextReducer_obj,
				router: routerReducer
			});
		    store.replaceReducer(nextReducer_fn);
		});
	}

	return store;	
}

export default configureStore;