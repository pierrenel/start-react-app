export default function (state = {
	myInfo: null
},action){
	switch(action.type){	
		case 'reqLogin':	
		case 'reqMyInfo':
			return {
				myInfo: action.payload
			}
		default:
			return state;
	}
}
