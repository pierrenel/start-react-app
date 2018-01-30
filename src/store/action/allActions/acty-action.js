export default {
	reqActy(page){
		return fetch('/acty',{
			method: 'POST',
			data: {
				page: page
			}
		}).then((res) => res.json())
	},	
	pullDown(){
		return (dispatch,getState) => {
			dispatch({
				type: 'acty_pullDown_on',
				payload: {
					isRefreshing: true
				}
			});

			return this.reqActy(0).then((res) => {
				let newData = res.data;
				// newData = []; // suppose no more data
				dispatch({
					type: 'acty_pullDown_off',
					payload: {
						isRefreshing: false,
						page: 0,
						dataSource: getState().acty.dataSource.cloneWithRows(newData)
					}
				})
			})
		}
	},
	pullUp(){
		return (dispatch,getState) => {
			dispatch({
				type: 'acty_pullUp_on',
				payload: {
					isLoadingMore: true
				}
			});

			let state = getState(),
				newPage = state.acty.page + 1,
				dataSource = state.acty.dataSource;
			return this.reqActy(newPage).then((res) => {
				 if(newPage >= 2) res.data = []; // suppose the upper limit is 2

	            let oldData = dataSource._dataBlob ? dataSource._dataBlob.s1 : [],
	                newData = oldData.concat(res.data);

				dispatch({
					type: 'acty_pullUp_off',
					payload: {
						isLoadingMore: false,
						page: newPage,
						dataSource: dataSource.cloneWithRows(newData)
					}
				})
			})
		}
	},
	changeDataSource(dataSource){
		return {
			type: 'acty_changeDataSource',
			payload: {
				dataSource: dataSource
			}
		}
	}		
}