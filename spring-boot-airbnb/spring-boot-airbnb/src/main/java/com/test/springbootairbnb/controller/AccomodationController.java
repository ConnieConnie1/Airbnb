package com.test.springbootairbnb.controller;

//Importo Accomodation repo e entity
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;
import com.test.springbootairbnb.service.AccomodationService;
import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.percistence.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Importo le liste
import java.util.List;

@RestController
@RequestMapping("/accomodations")
//  il metodo risponde alle richieste HTTP sulla route /accomodations

public class AccomodationController {

	@Autowired
	private AccomodationService accomodationService;
	// Il controller richiama solo la classe service

	@GetMapping("/allAccomodations")
	public List<AccomodationDTO> getAllAccomodations(
			@RequestParam(name = "region", required = false) String region,
			@RequestParam(name = "city", required = false) String city,
			@RequestParam(name = "idService", required = false) Long idService) {

		// Restituisci una lista di sistemazioni in base ai parametri specificati
		// ritorna lista DTO
		return accomodationService.getAccomodations(region, city, idService);
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
