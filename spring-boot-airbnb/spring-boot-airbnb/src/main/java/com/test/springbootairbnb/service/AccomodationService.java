package com.test.springbootairbnb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.springbootairbnb.percistence.entity.AccomodationEntity;
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;

@Service
public class AccomodationService {

	 @Autowired
	  private AccomodationRepository accomodationRepository;
	
	 public List<AccomodationEntity> getAccomodations(String region, String city, Long idService){
	 if (region == null && city == null && idService == null) {
	        // Se nessun parametro specificato, restituisci tutte le sistemazioni
	        return accomodationRepository.findAll();
	    } else if (region != null && city != null) {
	        // Se specificati region e città, cerca sistemazioni con quelle caratteristiche
	        return accomodationRepository.findByRegionAndCity(region, city);
	    } else if (region != null) {
	        // Se specificato solo regione, cerca sistemazioni con quelle caratteristiche
	        return accomodationRepository.findByRegion(region);
	        
	    } else if (city != null) {
	        // Se specifico solo città, cerca sistemazioni con quelle caratteristiche
	        return accomodationRepository.findByCity(city);
	        
	    } else if (idService != null) {
	        // Se specificato idService, cerca sistemazioni con quell'idService
	        return accomodationRepository.findByServiceId(idService);
	       
	        // Find by Region e find by City separati
	        
	    } else {
	        // Se i parametri non corrispondono a nessun caso specifico, restituisci tutte le sistemazioni
	        return accomodationRepository.findAll();
	    }
	 }
}
