package com.xiuye.listener;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;

import com.xiuye.util.log.LogUtil;

@WebListener
public class HelloRequestListener implements ServletRequestListener {

	@Override
	public void requestDestroyed(ServletRequestEvent sre) {
		LogUtil.log("HelloRequestListener over");
	}

	@Override
	public void requestInitialized(ServletRequestEvent sre) {
		LogUtil.log("HelloRequestListener start");
	}

}
