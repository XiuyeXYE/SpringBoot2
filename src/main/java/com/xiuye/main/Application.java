package com.xiuye.main;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.xiuye.config.Config;

@SpringBootApplication
@ImportAutoConfiguration(Config.class)
public class Application {

	
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
