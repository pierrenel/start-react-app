// limit the length of a name to a certain number of bytes
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