// 限制名称的长度为多少个字节
const limitNameLen = (name,len) => {
	let arr = name.split(''),sum = 0,result = '';

	for(let [index,ele] of arr.entries()){
		if(/^[\u4e00-\u9fa5]+$/.test(ele)){
			sum += 2;
		}else{
			sum += 1;
		}

		if(sum >len){
			return result + '...';
		}else if(index == arr.length-1){
			return result + ele;
		}else{
			result += ele;
		}			
	}
}

export {
	limitNameLen
}