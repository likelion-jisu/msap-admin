package com.msap.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SettingController {
	@GetMapping("/setting")
	public String getSetting() {
		return "안녕하세요. setting 페이지입니다.";
	}
}