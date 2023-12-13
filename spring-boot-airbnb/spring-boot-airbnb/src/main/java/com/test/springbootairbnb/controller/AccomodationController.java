package com.test.springbootairbnb.controller;

//Importo le liste
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.service.AccomodationService;

@RestController
@RequestMapping("/accomodations")
//  il metodo risponde alle richieste HTTP sulla route /accomodations

public class AccomodationController {

	@Autowired
	private AccomodationService accomodationService;
	// Il controller richiama solo la classe service

	@GetMapping
	public List<AccomodationDTO> getAllAccomodations(@RequestParam(name = "region", required = false) String region,
			@RequestParam(name = "city", required = false) String city,
			@RequestParam(name = "maxNumGuests", required = false) Integer maxNumGuests,
			@RequestParam(name = "numBeds", required = false) Integer numBeds,
			@RequestParam(name = "numBathrooms", required = false) Integer numBathrooms,
			@RequestParam(name = "pricePerNight", required = false) Integer pricePerNight,
			@RequestParam(name = "kitchen", required = false) Boolean kitchen,
			@RequestParam(name = "parking", required = false) Boolean parking,
			@RequestParam(name = "balcony", required = false) Boolean balcony,
			@RequestParam(name = "fridge", required = false) Boolean fridge,
			@RequestParam(name = "wifi", required = false) Boolean wifi,
			@RequestParam(name = "garden", required = false) Boolean garden,
			@RequestParam(name = "animalsAdmitted", required = false) Boolean animalsAdmitted,
			@RequestParam(name = "oven", required = false) Boolean oven,
			@RequestParam(name = "hairdryer", required = false) Boolean hairdryer,
			@RequestParam(name = "tv", required = false) Boolean tv,
			@RequestParam(name = "washingmachine", required = false) Boolean washingmachine,
			@RequestParam(name = "airconditioning", required = false) Boolean airconditioning,
			@RequestParam(name = "sea", required = false) Boolean sea,
			@RequestParam(name = "mountains", required = false) Boolean mountains)

	{

		// Restituisci una lista di sistemazioni in base ai parametri specificati
		// ritorna lista DTO
		return accomodationService.getAccomodations(region, city, maxNumGuests, numBeds, numBathrooms, pricePerNight, kitchen,
				parking, balcony, fridge, wifi, garden, animalsAdmitted, oven, hairdryer, tv, washingmachine,
				airconditioning, sea, mountains);
	}

	// Restituisci una singola sistemazione in base all'ID
	@GetMapping("/{idAccomodation}")
	public AccomodationDTO getAccomodationById(
			@PathVariable(name = "idAccomodation", required = false) Long idAccomodation) {
		if (idAccomodation != null) {
			return accomodationService.getAccomodationById(idAccomodation);
		} else { // se idAccomodation è null
			return null;
		}

	}

}
