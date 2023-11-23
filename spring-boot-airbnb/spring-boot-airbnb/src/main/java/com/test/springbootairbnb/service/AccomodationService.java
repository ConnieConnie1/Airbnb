package com.test.springbootairbnb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.mapper.AccomodationMapper;
import com.test.springbootairbnb.percistence.entity.AccomodationEntity;
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;

@Service
public class AccomodationService {

	// Iniezione repository
	@Autowired
	private AccomodationRepository accomodationRepository;

	// iniezione mapper
	@Autowired
	private AccomodationMapper accomodationMapper;

	public List<AccomodationDTO> getAccomodations(String region, String city, Integer numMaxOspiti, Integer numLetti, Integer numBagni, Integer prezzoNotte, Boolean cucina, Boolean parcheggio, Boolean balcone, Boolean frigorifero, Boolean wifi, Boolean giardino, Boolean animaliAmmessi, Boolean forno, Boolean asciugacapelli, Boolean tv, Boolean lavatrice, Boolean ariacondizionata, Boolean spiaggia, Boolean vistaMontagna) {
		
		
		List<AccomodationEntity> accomodationEntity = accomodationRepository.searchByFilter(region, city, numMaxOspiti, numLetti, numBagni, prezzoNotte, cucina, parcheggio, balcone, frigorifero, wifi, giardino, animaliAmmessi, forno, asciugacapelli, tv, lavatrice, ariacondizionata, spiaggia, vistaMontagna);
        
		List<AccomodationDTO> accomodationDTO = new ArrayList<>();

		
		 // mappare la lista di Entity in lista di DTO utilizzando l'accomodation Mapper (toDtoList)
        for (AccomodationEntity entity : accomodationEntity) {
            AccomodationDTO dto = accomodationMapper.toDto(entity);
            accomodationDTO.add(dto);
		}
        return accomodationDTO;

	}
	
	public AccomodationDTO getAccomodationById(Long id) {
	    AccomodationEntity entity = accomodationRepository.findById(id).orElse(null);
	    if (entity != null) {
	        return accomodationMapper.toDto(entity);
	    }
	    return null; // o gestisci il caso in cui l'entità non sia stata trovata
	}

}
