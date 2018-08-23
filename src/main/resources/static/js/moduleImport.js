import {hello} from "./export1.js";
hello();

//dynamic import
const export_module = "./export1.js";
import(export_module).then(m=>{
	console.log("basic dynamic import");
	m.hello();
});

(async ()=>{
	const export_module_name = "./export1.js";
	const module = await import(export_module_name);
	module.test1();
})();

async function test2(){
	console.log("===============");
	console.log("test2");
	const m = await import(export_module);
	m.hello();
	m.test1();
}
test2();


