package com.test.springbootairbnb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={
"com.test.springbootairbnb.mapper"})
public class SpringBootAirbnbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAirbnbApplication.class, args);
	}

}
