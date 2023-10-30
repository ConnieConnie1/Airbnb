package com.test.springbootairbnb.dto;
import java.sql.Date;

import lombok.Data;

@Data
public class AccomodationDTO {
	 
	private Long idAlloggio;
	private String nome;
	private String regione;
	private String citta;
	private String descrizione;
	private Long hostId;
    private Integer numeroMaxOspiti;
    private Integer numLetto;
    private Integer numBagni;
    private Integer prezzoBaseNotte;
   
}
