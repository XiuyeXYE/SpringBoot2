class TypeUtil{
	static isDate(d){
//		let regStr = "^(((\d+/0[1-9]/((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+/1[0-2]/((0[1-9])|([1-2][0-9])|(3[0-1]))))|((\d+-0[1-9]-((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+-1[0-2]-((0[1-9])|([1-2][0-9])|(3[0-1])))))$";
//		let regObj = new RegExp(regStr);
//		regObj.test(d);
		return /^(((\d+\/0[1-9]\/((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+\/1[0-2]\/((0[1-9])|([1-2][0-9])|(3[0-1]))))|((\d+-0[1-9]-((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+-1[0-2]-((0[1-9])|([1-2][0-9])|(3[0-1])))))$/.test(d);
	}
	static isNumeric(d){
		return typeof d == 'number';
	}
	static isArray(d){
		return Array.isArray(d);
	}
	static isString(d){
		return typeof d == 'string';
	}
}