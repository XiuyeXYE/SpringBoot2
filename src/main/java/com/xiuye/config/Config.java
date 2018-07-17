package com.xiuye.config;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.xiuye.util.log.LogUtil;

@SpringBootConfiguration
//@Configuration
//如果不是程序的启动入口类,不要使用下面这个注解;否则,会出一些莫名的错误,
//如找不到SqlSessionFactory,datasource为null等
//@EnableAutoConfiguration
@EnableTransactionManagement
@EnableRetry
@EnableJpaAuditing
@EnableScheduling
//@EnableAspectJAutoProxy
@EnableJpaRepositories({ "com.xiuye.dao.jpa" })
@ComponentScan({ "com.xiuye.service.impl", "com.xiuye.controller", "com.xiuye.dao.repositroy" })

@ServletComponentScan({ "com.xiuye.filter", "com.xiuye.listener", "com.xiuye.servlet", })
@MapperScan({ "com.xiuye.dao.mapper" })
@EntityScan("com.xiuye.entity")
public class Config {

	@Scheduled(cron = "0/10 * * * * ?")
	public void runTimer() {
		LogUtil.log("Timer running per 10s!");
	}

	@Resource
	private SqlSessionFactory ssf;

	@Resource
	private PlatformTransactionManager ptm;

	@Value("${config2.info}")
	private String config2;

	@Value("${config1.info}")
	private String config1;

	@PostConstruct
	public void init() {
		LogUtil.log("ssf = " + ssf);
		LogUtil.log("tm = " + ptm);
		LogUtil.log("config1 = " + config1);
		LogUtil.log("config2 = " + config2);
	}

//	@Bean
//	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
//		LogUtil.log(dataSource);
//	    SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
//	    sessionFactory.setDataSource(dataSource);
//	    return sessionFactory.getObject();
//	}

	@Bean
	public InternalResourceViewResolver vr(@Value("${spring.mvc.view.prefix}") String prefix,
			@Value("${spring.mvc.view.suffix}") String suffix,
			@Value("${spring.mvc.view.view-names}") String view_names, @Value("${spring.mvc.view.order}") int order

	) {
		LogUtil.log("prefix=" + prefix);
		LogUtil.log("suffix=" + suffix);
		LogUtil.log("view_names=" + view_names);
		LogUtil.log("order=" + order);
		InternalResourceViewResolver vr = new InternalResourceViewResolver(prefix, suffix);
		vr.setViewNames(view_names);
		vr.setOrder(order);
		return vr;
	}
}
