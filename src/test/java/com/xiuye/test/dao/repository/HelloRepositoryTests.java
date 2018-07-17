package com.xiuye.test.dao.repository;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.xiuye.config.Config;
import com.xiuye.dao.repositroy.HelloRepository;
import com.xiuye.util.log.LogUtil;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Config.class)
@EnableAutoConfiguration
public class HelloRepositoryTests {
	
	@Resource
	private HelloRepository hr;
	
	@Test
	public void testAllHellos() {
		LogUtil.log(this.hr.allHellos());
	}
	
}
