package com.xiuye.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
}
