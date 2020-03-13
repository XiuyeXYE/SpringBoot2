package com.xiuye.test.service;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.xiuye.config.Config;
import com.xiuye.entity.Hello;
import com.xiuye.service.HelloService;
import com.xiuye.util.time.TimeUtil;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Config.class)
@EnableAutoConfiguration
public class HelloServiceTests {

	@Resource
	private HelloService hs;
	
	@Test
	public void testExceptionRollback() {
		
		TimeUtil.start();
		Hello h = new Hello();
		h.setMsg("Rollback not successful! 23");
		this.hs.insertException(h);
		TimeUtil.outByMS();
		
	}
	@Test
	public void testInsertHello() {
		
		TimeUtil.start();
		Hello h = new Hello();
		h.setMsg("insert successful!"+Math.random());
		this.hs.insert(h);
		TimeUtil.outByMS();
		
	}
	
}
