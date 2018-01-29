import { ListView } from 'antd-mobile';

export default function (state = {
	isRefreshing: false,
	isLoadingMore: false,
	page: 0,
	dataSource: new ListView.DataSource({
		getRowData: (dataBlob,sectionId,rowId) => dataBlob[sectionId][rowId],
		rowHasChanged: (row1,row2) => row1 !== row2
	})
},action){
	switch(action.type){
		case 'acty_pullDown_on':
		case 'acty_pullDown_off':
		case 'acty_pullUp_on':
		case 'acty_pullUp_off':		
		case 'acty_changeDataSource':	
			return {
				...state,
				...action.payload
			}						
		default:
			return state;
	}
}