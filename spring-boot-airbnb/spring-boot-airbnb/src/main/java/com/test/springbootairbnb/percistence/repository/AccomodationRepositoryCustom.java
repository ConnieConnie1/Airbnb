package com.test.springbootairbnb.percistence.repository;

import java.util.List;

import com.test.springbootairbnb.percistence.entity.Accomodation;

public interface AccomodationRepositoryCustom {
	// QUERY CUSTOM CHE ritorna lista di Accomodation
	
	List<Accomodation> searchByFilter(
			String region, 
			String city, 
			Integer maxNumGuests, 
			Integer numBeds, 
			Integer numBathrooms, 
			Integer priceByNight,
			Boolean kitchen, 
			Boolean parking, 
			Boolean balcony, 
			Boolean fridge, 
			Boolean wifi, 
			Boolean garden, 
			Boolean animalsAdmitted, 
			Boolean oven, 
			Boolean hairdryer,
			Boolean tv,
			Boolean washingmachine,
			Boolean airconditioning,
			Boolean sea,
			Boolean mountains
			); 
}
