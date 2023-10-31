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

	public List<AccomodationDTO> getAccomodations(String region, String city, Long idService) {
		List<AccomodationEntity> accomodationEntity = new ArrayList<>();
        List<AccomodationDTO> accomodationDTO = new ArrayList<>();

		if (region == null && city == null && idService == null) {

			// Se nessun parametro specificato,
			// Aggiungo lista find all
			accomodationEntity.addAll(accomodationRepository.findAll());

		} else if (region != null && city != null) {
			// Se specificati region e città, cerca sistemazioni con quelle caratteristiche
			accomodationEntity.addAll(accomodationRepository.findByRegionAndCity(region, city));
		} else if (region != null) {
			// Se specificato solo regione, cerca sistemazioni con quelle caratteristiche
			accomodationEntity.addAll(accomodationRepository.findByRegion(region));

		} else if (city != null) {
			// Se specifico solo città, cerca sistemazioni con quelle caratteristiche
			accomodationEntity.addAll(accomodationRepository.findByCity(city));

		} else if (idService != null) {
			// Se specificato idService, cerca sistemazioni con quell'idService
			accomodationEntity.addAll(accomodationRepository.findByServiceId(idService));

		} else {
			// Se i parametri non corrispondono a nessun caso specifico, restituisci tutte
			// le sistemazioni
			accomodationEntity.addAll(accomodationRepository.findAll());
		}
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
