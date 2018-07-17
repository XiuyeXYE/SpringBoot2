package com.xiuye.test.main;

import javax.annotation.Resource;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.xiuye.config.Config;
import com.xiuye.util.log.LogUtil;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Config.class)
@EnableAutoConfiguration
//@WebAppConfiguration
@AutoConfigureMockMvc
public class ApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Resource
	private MockMvc mvc;

	@Autowired
	private WebApplicationContext context;

//	@Before
//	public void setupMockMvc() throws Exception {
//		mvc = MockMvcBuilders.webAppContextSetup(context).build();
//	}

	@Test
	public void testRequest() throws Exception {
		LogUtil.log(this.mvc);
		this.mvc
		.perform(MockMvcRequestBuilders
				.get("/hello")
				.accept(MediaType.TEXT_HTML))
		.andExpect(MockMvcResultMatchers
				.status()
				.isOk())
		.andDo(MockMvcResultHandlers.print());
		this.mvc
		.perform(MockMvcRequestBuilders
				.get("/allHellos")
				.accept(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers
				.status()
				.isOk())
		.andDo(MockMvcResultHandlers.print());
		
		MvcResult mvcResult = this.mvc
				.perform(MockMvcRequestBuilders
						.get("/allHellos")
						.accept(MediaType.APPLICATION_JSON))
				.andReturn();
		LogUtil.log(mvcResult);
		LogUtil.log(mvcResult.getResponse());
		LogUtil.log(mvcResult.getResponse().getStatus());
	}

}
