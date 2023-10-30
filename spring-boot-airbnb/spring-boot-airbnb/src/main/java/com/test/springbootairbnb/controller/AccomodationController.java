package com.test.springbootairbnb.controller;

//Importo Accomodation repo e entity
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;
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
    // per iniettare il repository AccomodationRepository nel controller, per accedere ai dati delle sistemazioni.
    
    private AccomodationRepository accomodationRepository;

    @GetMapping
    public List<AccomodationEntity> getAllAccomodations(
        @RequestParam(name = "region", required = false) String region,
        @RequestParam(name = "city", required = false) String city,
        @RequestParam(name = "idService", required = false) Long idService) {
			
    // Restituisci una lista di sistemazioni in base ai parametri specificati
    	return null;
}

// Restituisci una singola sistemazione in base all'ID
    @GetMapping("/{ID}")
    public AccomodationEntity getAccomodationById(
     @RequestParam(name = "idAccomodation", required = false) Long idAccomodation) {
       if (idAccomodation != null){
        return  accomodationRepository.findById(idAccomodation);
       }

        
    }
}