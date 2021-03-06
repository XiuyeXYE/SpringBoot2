class Echart{
	constructor(name,divId)
	{
		if(!$){
			throw "JQuery not exists!";
		}
		if(!echarts||!echarts.init){
			throw "Echarts not exists!";
		}
		
		if(!name){
			throw "[Two params]First input parameter must be input.First Parameter is name.";
		}
		if(!name){
			throw "[Two params]Second input parameter must be input.Second Parameter is div id.";
		}
		Echart.checkNameExists(name);
		this.name = name;
		this.divId = divId;
		this.$dom = $("#"+this.divId);
		this.chart = echarts.init(DomUtil.domById(this.divId));
		this.initDefaultOption();
		Echart.add(this.name,this);
		this.temp = new Map;
	}
	openXAxisTrigger(b=true){
		if(!this.option.xAxis)throw "xAxis is not existing and initialized"
		this.option.xAxis.triggerEvent = b;
	}
	setCustomData(k,v){
		this.temp.set(k,v);
	}
	deleteCustomData(k){
		this.temp.delete(k);
	}
	getCustomData(k){
		this.temp.get(k);
	}
	off(e,h){
		this.chart.off(e,h);
	}
	on(e,h){
		this.chart.on(e,h);
	}
	divAttr(k,v){
		if(typeof k === 'string' && typeof v === 'string'){
			this.$dom.attr(k,v);
		}
		else if(typeof k === 'string' && typeof v != 'string'){
			return this.$dom.attr(k);
		}
	}
	initDefaultOption(){
		this.option={
		            tooltip: {
		            	show:true,
		            	trigger: 'axis',
		            },
		            legend:{},
		            xAxis :{
	                    type : 'category',
	                    axisLabel : {
	                        show:true,
	                        interval: 0,    // {number}
	                    },
	                },
	                yAxis: {
	    				type:'value',
	    				boundaryGap: [0,0.3],
	    			},
		};
	}
	setTitleName(n){
		this.option.title={
				text:n
		}
//		return this.set({
//			 title: {
//	                text:n, 
//	         }
//		});
	}
	setLegendData(lData){
		if(!Array.isArray(lData)){
			throw "legend data must be array!";
		}
		this.option.legend.data = lData;
//		return this.set({
//			 legend: {
//	                data:lData,
//	          },
//		});
	}
	setSingleXAxisData(xData){
		if(!Array.isArray(xData)){
			throw "xAxis data must be array!";
		}
		this.option.xAxis.data = xData;
//		return this.set({
//			 xAxis: {
//	                data: xData,
//	          },
//		});
	}
	setSingleYAxisType(t){
		this.option.yAxis.type = t; 
//		return this.set({
//			yAxis: {
//				type:t,
//			},
//		});
	}
	setData(d){
		this.option.series = d;
//		return this.set({
//			 series: d,
//		});
	}
	isEmpty(){
		
		if(!this.option.series){
			return true;
		}
		if(!!this.option.series && !!this.option.series.length && this.option.series.length == 0){
			return true;
		}
		if(!!this.option.series && !!this.option.series.length && this.option.series.length > 0){
			for(let sery in this.option.series){
				if(!!sery 
				&& !!sery.data
				&& !!sery.data.length
				&& sery.length>0){
					return false;
				}
			}
		}
		return true;
	}
	setMultiXAxis(xAxis){
		this.option.xAxis = xAxis;
//		return this.set({
//			xAxis:xAxis,
//		});
	}
	setMultiYAxis(yAxis){
		this.option.yAxis = yAxis;
//		return this.set({
//			yAxis:yAxis,
//		});
	}
	setSeriesData(i,n,d){
		this.option.series[i].name = n;
		this.option.series[i].data = d;
	}
	show(notMerge=true, lazyUpdate=false){
		this.chart.setOption(this.option,notMerge, lazyUpdate);
	}
	//deprecated
	set(param){
		if(!param){
			return this.option; 
		}
		return $.extend(this.option,param);
	}
	
	domWidth(w){
		if(!!w){
			if(TypeUtil.isNumeric(w))this.$dom.css("width",w+"px");
			if(TypeUtil.isString(w))this.$dom.css("width",w);
			this.resize();
		}
		return this.$dom.css("width");
	}
	domHeight(h){
		if(!!h){
			if(TypeUtil.isNumeric(h))this.$dom.css("height",h+"px");
			if(TypeUtil.isString(h))this.$dom.css("height",h);
			this.resize();
		}
		return this.$dom.css("height");
	}
	canvasWidth(){
		return this.chart.getWidth();
	}
	canvasHeight(){
		return this.chart.getHeight();
	}
	resize(opt){
		this.chart.resize(opt);
	}
	
	clear(){
		this.chart.clear();
	}
	destroy(){
		if(!this.chart.isDisposed()){
			this.chart.dispose();
			Echart.remove(this.name);
		}
		
	}
	dom(){
		return this.chart.getDom();
	}
	render(){
		return this.chart.getZr();
	}
	add(graph){
		this.render().add(graph);
	}
	remove(graph){
		this.render().remove(graph);
	}
	canvas(){
		return this.chart.getRenderedCanvas();
	}
	
	static checkNameExists(name){
		if(!!Echart.getEchartObjByName(name)){
			throw "This name:"+name+" is existence,please set other names!";
		}
	}
	static getEchartObjByName(n){
		return Echart.ALL_ECHARTS.get(n);
	}
	static add(n,v){
		return Echart.ALL_ECHARTS.set(n,v);
	}
	static remove(n){
		return Echart.ALL_ECHARTS.delete(n);
	}
	static clear(){
		return Echart.ALL_ECHARTS.clear();
	}
	
	
}
Echart.ALL_ECHARTS=new Map();


