package com.xiuye.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xiuye.dao.mapper.HelloMapper;
import com.xiuye.entity.Hello;
import com.xiuye.service.HelloService;

@Service
public class HelloServiceImpl implements HelloService {

	@Resource
	private HelloMapper helloMapper;
	
	@Override
	public List<Hello> getAllHellos(){
		return this.helloMapper.findAll();
	}

	@Transactional
	@Override
	public void insertException(Hello h) {
		this.helloMapper.insert(h);
		throw new RuntimeException("test rollback.");
	}

	@Override
	public void insert(Hello h) {
		this.helloMapper.insert(h);
	}
	
}
