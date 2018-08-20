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
	
	initDefaultOption(){
		this.option={
		            tooltip: {
		            	show:true,
		            	trigger: 'axis',
		            },
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
		return this.set({
			 title: {
	                text:n, 
	         }
		});
	}
	setLegendData(lData){
		if(!Array.isArray(lData)){
			throw "legend data must be array!";
		}
		return this.set({
			 legend: {
	                data:lData,
	          },
		});
	}
	setSingleXAxisData(xData){
		if(!Array.isArray(xData)){
			throw "xAxis data must be array!";
		}
		return this.set({
			 xAxis: {
	                data: xData,
	          },
		});
	}
	setSingleYAxisType(t){
		return this.set({
			yAxis: {
				type:t,
			},
		});
	}
	setData(d){
		return this.set({
			 series: d,
		});
	}
	setMultiXAxis(xAxis){
		return this.set({
			xAxis:xAxis,
		});
	}
	setMultiYAxis(yAxis){
		return this.set({
			yAxis:yAxis,
		});
	}
	setSeriesData(i,n,d){
		this.option.series[i].name = n;
		this.option.series[i].data = d;
	}
	show(notMerge=true, lazyUpdate=false){
		this.chart.setOption(this.option,notMerge, lazyUpdate);
	}
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


