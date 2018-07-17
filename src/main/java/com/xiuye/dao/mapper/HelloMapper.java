package com.xiuye.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.xiuye.entity.Hello;

@Mapper
public interface HelloMapper {
	List<Hello> allHellos();
	List<Hello> findAll();
	void insert(Hello h);
}
