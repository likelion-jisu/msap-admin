package com.msap.admin;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SettingController {
	@PostMapping("/ip")
	public ResponseEntity<String> ip (HttpServletRequest request) {
		// 요청을 보낸 클라이언트의 IP주소를 반환합니다.
		return ResponseEntity.ok(request.getRemoteAddr());
	}
	
	@GetMapping("/setting")
	public String getSetting() {
		return "안녕하세요. setting 페이지입니다.";
	}
}