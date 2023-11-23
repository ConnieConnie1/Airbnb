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
			@RequestParam(name = "numMaxOspiti", required = false) Integer numMaxOspiti, 
			@RequestParam(name = "numLetti", required = false) Integer numLetti, 
			@RequestParam(name = "numBagni", required = false) Integer numBagni,
			@RequestParam(name = "prezzoNotte", required = false) Integer prezzoNotte, 
			@RequestParam(name = "cucina", required = false) Boolean cucina, 
			@RequestParam(name = "parcheggio", required = false) Boolean parcheggio,
			@RequestParam(name = "balcone", required = false) Boolean balcone,
			@RequestParam(name = "frigorifero", required = false) Boolean frigorifero,
			@RequestParam(name = "wifi", required = false) Boolean wifi,
			@RequestParam(name = "giardino", required = false) Boolean giardino,
			@RequestParam(name = "animaliAmmessi", required = false) Boolean animaliAmmessi,
			@RequestParam(name = "forno", required = false) Boolean forno,
			@RequestParam(name = "asciugacapelli", required = false) Boolean asciugacapelli,
			@RequestParam(name = "tv", required = false) Boolean tv,
			@RequestParam(name = "lavatrice", required = false) Boolean lavatrice,
			@RequestParam(name = "ariacondizionata", required = false) Boolean ariacondizionata,
			@RequestParam(name = "spiaggia", required = false) Boolean spiaggia,
			@RequestParam(name = "vistaMontagna", required = false) Boolean vistaMontagna)

	{

		// Restituisci una lista di sistemazioni in base ai parametri specificati
		// ritorna lista DTO
		return accomodationService.getAccomodations(region, city, numMaxOspiti,numLetti, numBagni, prezzoNotte, cucina, parcheggio, balcone, frigorifero, wifi, giardino, animaliAmmessi,
				forno, asciugacapelli, tv, lavatrice, ariacondizionata, spiaggia, vistaMontagna);
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
