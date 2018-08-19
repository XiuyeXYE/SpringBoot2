class TypeUtil{
	static isDate(d){
		return TypeUtil.DATE_REGEX.test(d);
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
	static isChar(d){
		if(TypeUtil.isString(d)){
			return TypeUtil.CHAR_REGEX.test(d);
		}
		return false;
	}
	static isObject(d){
		return typeof d == 'object';
	}
}
//DATE_REGEX 1
//Object.defineProperty(TypeUtil,"DATE_REGEX",{
//	value:new RegExp("^(((\d+/0[1-9]/((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+/1[0-2]/((0[1-9])|([1-2][0-9])|(3[0-1]))))|((\d+-0[1-9]-((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+-1[0-2]-((0[1-9])|([1-2][0-9])|(3[0-1])))))$"),
//	configurable:false,
//	enumerable:false,
//	writable:false,
//});
//DATE_REGEX 2
Object.defineProperty(TypeUtil,"DATE_REGEX",{
	value:/^(((\d+\/0[1-9]\/((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+\/1[0-2]\/((0[1-9])|([1-2][0-9])|(3[0-1]))))|((\d+-0[1-9]-((0[1-9])|([1-2][0-9])|(3[0-1])))|(\d+-1[0-2]-((0[1-9])|([1-2][0-9])|(3[0-1])))))$/,
	configurable:false,
	enumerable:false,
	writable:false,
});
Object.defineProperty(TypeUtil,"CHAR_REGEX",{
	value:/^\S$/,
	configurable:false,
	enumerable:false,
	writable:false,
});