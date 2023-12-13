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
	private String name;
	private String region;
	private String city;
	private int hostID;
	private int maxNumGuests;
	private int numBeds;
	private int numBathrooms;
	private String description;
	private int pricePerNight;
	private String url;

}
