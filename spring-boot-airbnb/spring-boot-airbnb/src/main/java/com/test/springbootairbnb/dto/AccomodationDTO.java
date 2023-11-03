package com.test.springbootairbnb.dto;

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
public class AccomodationDTO {

	private Long id;
	private String nome;
	private String region;
	private String city;
	private int hostID;
	private int numMaxOspiti;
	private int numLetti;
	private int numBagni;
	private String descrizione;
	private int prezzoNotte;

}
