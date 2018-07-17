package com.xiuye.service;

import java.util.List;

import com.xiuye.entity.Hello;

public interface HelloService {

	List<Hello> getAllHellos();

	void insertException(Hello h);
	
	void insert(Hello h);
}
