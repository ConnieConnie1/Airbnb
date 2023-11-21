package com.test.springbootairbnb.dto;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationDTO {
	
    private Date checkIn;
    private Date checkOut;
    private Integer numeroOspiti;
    private Long idAlloggio;
    private String email;
    private Long priceFinal;
   
}
