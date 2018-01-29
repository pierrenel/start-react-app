export default {		
    reqLogin(username,passwd){
        return (dispatch,getState) => fetch('/login',{
        	method: 'POST',
        	data: {
            	username,
            	passwd					
        	}
        }).then((res) => res.json())
            .then((res)=>{
                let data = res.data;

                localStorage.setItem('token',data.token);

        		dispatch({
        			type: 'reqLogin',
        			payload: data.userInfo
        		});
            }); 
    },
    reqMyInfo(){
        return (dispatch,getState) => fetch('/userInfo')
            .then((res) => res.json())
            .then((res) => {
                dispatch({
                    type: 'reqMyInfo',
                    payload: res.data
                });

                return res.data ? true : false;
            });        
    }
}