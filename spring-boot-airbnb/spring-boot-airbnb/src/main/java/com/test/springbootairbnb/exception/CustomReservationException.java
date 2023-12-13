package com.test.springbootairbnb.exception;

import lombok.Data;

@SuppressWarnings("serial")
@Data
public class CustomReservationException extends RuntimeException {

	private String body;

	public CustomReservationException(String body) {
 
			this.body = body;
	}
}
