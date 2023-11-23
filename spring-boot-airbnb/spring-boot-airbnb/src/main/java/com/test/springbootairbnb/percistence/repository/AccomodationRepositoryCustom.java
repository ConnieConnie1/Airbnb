package com.test.springbootairbnb.percistence.repository;

import java.util.List;

import com.test.springbootairbnb.percistence.entity.AccomodationEntity;

public interface AccomodationRepositoryCustom {
	// QUERY CUSTOM CHE ritorna lista di Accomodation
	
	List<AccomodationEntity> searchByFilter(
			String region, 
			String city, 
			Integer numMaxOspiti, 
			Integer numLetti, 
			Integer numBagni, 
			Integer prezzoNotte,
			Boolean cucina, 
			Boolean parcheggio, 
			Boolean balcone, 
			Boolean frigorifero, 
			Boolean wifi, 
			Boolean giardino, 
			Boolean animaliAmmessi, 
			Boolean forno, 
			Boolean asciugacapelli,
			Boolean tv,
			Boolean lavatrice,
			Boolean ariacondizionata,
			Boolean spiaggia,
			Boolean vistaMontagna
			); 
}
