package com.msap.admin.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter(urlPatterns= "/api/*")
public class SimpleCORSFilter implements Filter { 
	

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println("init XSSFilter");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
		res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT"); 
		res.setHeader("Access-Control-Max-Age", "3600"); 
		res.setHeader("Access-Control-Allow-Headers", "x-requested-with, origin, content-type, accept"); 
		res.setHeader("Access-Control-Allow-Credentials", "true");
		
		System.out.println("##### filter - before #####");
		chain.doFilter(req, res);
		System.out.println("##### filter - after #####");
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy XSSFilter");
	}
}
