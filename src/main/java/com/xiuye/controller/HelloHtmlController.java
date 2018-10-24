package com.xiuye.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xiuye.service.HelloService;

@Controller
public class HelloHtmlController {

	@Resource
	private HelloService helloSerivce;
	
	@GetMapping("/hello")
	public String hello(Model model) {
//		Hello h = new Hello();
//		h.setMsg("hello,test rollback2");
//		this.helloSerivce.insertException(h);
		model.addAttribute("hellos", this.helloSerivce.getAllHellos());
		return "hello";
	}
	
	@GetMapping("jspHello")
	public String jspHello(Model model) {
		model.addAttribute("hellos", this.helloSerivce.getAllHellos());
		return "jsp/jspHello";
	}
	
	@GetMapping("ztree")
	public String ztree() {
		return "ztree";
	}
	@GetMapping("solarSystem")
	public String solarSystem() {
		return "SolarSystem";
	}
	@GetMapping("ladder")
	public String ladder() {
		return "ladder";
	}
	
	@GetMapping("grid")
	public String grid() {
		return "grid";
	}
	
	
	@PostMapping(value="JSONData.json")
	public String gridJson() {
		
		return "JSONData.json";
	}
	
	
	
	@PostMapping(value="JSONData2.json")
	public String gridJson2() {
		
		return "JSONData";
	}
	
	
	@GetMapping("timer")
	public String timer() {
		return "timer";
	}
	
	@GetMapping("echart")
	public String echart() {
		return "echart";
	}
	
	@GetMapping("module")
	public String module() {
		return "module";
	}
	
	
	@RequestMapping("dialog")
	public String dialog() {
		return "dialog";
	}
	
}
