package com.xiuye.test.dao.mapper;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.xiuye.config.Config;
import com.xiuye.dao.mapper.HelloMapper;
import com.xiuye.util.log.LogUtil;
import com.xiuye.util.time.TimeUtil;


@RunWith(SpringRunner.class)
@SpringBootTest(classes=Config.class)
@EnableAutoConfiguration
public class HelloMapperTests {

	@Test
	public void contextLoads() {
	}

	@Resource
	private HelloMapper helloMapper;
	@Test
	public void testAllHellos() {
		
		TimeUtil.start();
		LogUtil.log(this.helloMapper.allHellos());
		TimeUtil.outCostOnConsoleMs();
		LogUtil.log(this.helloMapper.findAll());
		TimeUtil.outCostOnConsoleMs();
	}
	
}
