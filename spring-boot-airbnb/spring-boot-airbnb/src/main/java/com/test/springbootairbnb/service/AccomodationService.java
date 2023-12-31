package com.test.springbootairbnb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.mapper.AccomodationMapper;
import com.test.springbootairbnb.percistence.entity.Accomodation;
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;

@Service
public class AccomodationService {

	// Iniezione repository
	@Autowired
	private AccomodationRepository accomodationRepository;

	// Iniezione mapper
	@Autowired
	private AccomodationMapper accomodationMapper;

	public List<AccomodationDTO> getAccomodations(String region, String city, Integer numMaxOspiti, Integer numLetti,
			Integer numBagni, Integer prezzoNotte, Boolean cucina, Boolean parcheggio, Boolean balcone,
			Boolean frigorifero, Boolean wifi, Boolean giardino, Boolean animaliAmmessi, Boolean forno,
			Boolean asciugacapelli, Boolean tv, Boolean lavatrice, Boolean ariacondizionata, Boolean spiaggia,
			Boolean vistaMontagna) {

		List<Accomodation> accomodationEntity = accomodationRepository.searchByFilter(region, city, numMaxOspiti,
				numLetti, numBagni, prezzoNotte, cucina, parcheggio, balcone, frigorifero, wifi, giardino,
				animaliAmmessi, forno, asciugacapelli, tv, lavatrice, ariacondizionata, spiaggia, vistaMontagna);

		List<AccomodationDTO> accomodationDTO = new ArrayList<>();

		// mappare la lista di Entity in lista di DTO utilizzando l'accomodation Mapper
		// (toDtoList)
		for (Accomodation entity : accomodationEntity) {
			AccomodationDTO dto = accomodationMapper.toDto(entity);
			accomodationDTO.add(dto);
		}
		return accomodationDTO;

	}

	public AccomodationDTO getAccomodationById(Long id) {
		Accomodation entity = accomodationRepository.findById(id).get();
		return accomodationMapper.toDto(entity);

	}

}
