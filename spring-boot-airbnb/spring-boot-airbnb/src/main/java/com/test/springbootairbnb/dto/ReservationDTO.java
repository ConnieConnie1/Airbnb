package com.test.springbootairbnb.dto;
import java.sql.Date;

import lombok.Data;

@Data
public class ReservationDTO {
	
    private Date checkIn;
    private Date checkOut;
    private Integer numeroOspiti;
    private Long idAlloggio;
    private String email;
    private Long priceFinal;
   
}
