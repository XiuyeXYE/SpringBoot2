
class Timer{
	constructor(callback,interval=1000,...params)
	{
		if(!callback){
			throw "Must to input callback function!";
		}
		this.run = callback;
		this.interval = interval;
		this.params = params;
		let that = this;
		this.timerFn = (p)=>{
			that.run(p);
			that.clearTimer();
			that.timerId = setTimeout(that.timerFn,that.interval,that.params);
		};
		this.timerId = setTimeout(this.timerFn,this.interval,this.params);
		Timer.ALL_TIMERS.push(this);
	}
	start(callback,interval,...params){
		if(!!callback){
			this.run = callback;
		}
		if(!!interval){
			this.interval = interval;
		}
		if(!!params&&params.length>0){
			this.params = params;
		}
		this.timerId = setTimeout(this.timerFn,this.interval,this.params);	
	}
	stop(){
		this.clearTimer();
	}
	clearTimer(){
		clearTimeout(this.timerId);
	}
	static stopAll(clear){
		for(let i of Timer.ALL_TIMERS){
			i.stop();
		}
		if(!!clear){
			Timer.clearAll();
		}
	}
	static startAll(){
		if(!Timer.ALL_TIMERS || Timer.ALL_TIMERS.length == 0){
			throw "All timer is missing!Maybe you delete all the timers!";
		}
		for(let i of Timer.ALL_TIMERS){
			i.start();
		}
	}
	static clearAll(){
		Timer.ALL_TIMERS.length = 0;
	}
}
Timer.ALL_TIMERS=[];