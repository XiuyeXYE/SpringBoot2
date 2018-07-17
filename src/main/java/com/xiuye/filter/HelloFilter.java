package com.xiuye.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

import com.xiuye.util.log.LogUtil;

@WebFilter(urlPatterns="/hello.do")//have to have "/"
public class HelloFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		LogUtil.log("HelloFilter hello.do?only?");//Before HelloServlet!
		chain.doFilter(request, response);//before 
	}

	@Override
	public void destroy() {
		LogUtil.log("HelloFilter end");
	}

}
