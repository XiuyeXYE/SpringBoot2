package com.xiuye.dao.repositroy;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("helloRepository2")
public class HelloRepository {

	@Resource
	private JdbcTemplate jt;

	public List<Map<String, Object>> allHellos() {
		return this.jt.queryForList("select id,msg from hello");
	}

}
