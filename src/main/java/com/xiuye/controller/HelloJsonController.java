package com.xiuye.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.xiuye.entity.Hello;
import com.xiuye.service.HelloService;

@RestController
public class HelloJsonController {

	@Autowired
	private HelloService hs;
	
	@GetMapping(value = "/allHellos")
	public List<Hello> getMethodName() {
		return this.hs.getAllHellos();
	}
	
	
	
	@GetMapping("viewResolver")
	public InternalResourceViewResolver viewResolver(InternalResourceViewResolver irvr) {
		return irvr;
	}
	
}
