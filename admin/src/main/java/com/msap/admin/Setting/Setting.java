package com.msap.admin.Setting;

import javax.persistence.*;
import java.io.Serializable;

@javax.persistence.Entity
public class Setting implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer tid;
 
    @Column(name = "agent_num", nullable = true)
    private Integer agent_num;

    @Column(name = "vuser_num", nullable = true)
    private Integer vuser_num;
    
    @Column(name = "target_server", nullable = true)
    private String target_server;
    
    @Column(name = "test_time", nullable = true)
    private String test_time;

    @Column(name = "test_count", nullable = true)
    private Integer test_count;

    @Column(name = "ramp_up_use_yn", nullable = true)
    private String ramp_up_use_yn;

    @Column(name = "init_count", nullable = true)
    private Integer init_count;

    @Column(name = "init_wait_time", nullable = true)
    private String init_wait_time;

    @Column(name = "inc_unit", nullable = true)
    private Integer inc_unit;

    @Column(name = "period", nullable = true)
    private Integer period;

	public Integer getTid() {
		return tid;
	}

	public void setTid(Integer tid) {
		this.tid = tid;
	}

	public Integer getAgent_num() {
		return agent_num;
	}

	public void setAgent_num(Integer agent_num) {
		this.agent_num = agent_num;
	}

	public Integer getVuser_num() {
		return vuser_num;
	}

	public void setVuser_num(Integer vuser_num) {
		this.vuser_num = vuser_num;
	}

	public String getTarget_server() {
		return target_server;
	}

	public void setTarget_server(String target_server) {
		this.target_server = target_server;
	}

	public String getTest_time() {
		return test_time;
	}

	public void setTest_time(String test_time) {
		this.test_time = test_time;
	}

	public Integer getTest_count() {
		return test_count;
	}

	public void setTest_count(Integer test_count) {
		this.test_count = test_count;
	}

	public String getRamp_up_use_yn() {
		return ramp_up_use_yn;
	}

	public void setRamp_up_use_yn(String ramp_up_use_yn) {
		this.ramp_up_use_yn = ramp_up_use_yn;
	}

	public Integer getInit_count() {
		return init_count;
	}

	public void setInit_count(Integer init_count) {
		this.init_count = init_count;
	}

	public String getInit_wait_time() {
		return init_wait_time;
	}

	public void setInit_wait_time(String init_wait_time) {
		this.init_wait_time = init_wait_time;
	}

	public Integer getInc_unit() {
		return inc_unit;
	}

	public void setInc_unit(Integer inc_unit) {
		this.inc_unit = inc_unit;
	}

	public Integer getPeriod() {
		return period;
	}

	public void setPeriod(Integer period) {
		this.period = period;
	}
}
