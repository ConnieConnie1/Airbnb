package com.test.springbootairbnb.controller;

//Importo Accomodation repo e entity
import com.test.springbootairbnb.percistence.repository.AccomodationRepository;
import com.test.springbootairbnb.percistence.repository.entity.AccomodationEntity;
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
    if (region == null && city == null && idService == null) {
        // Se nessun parametro specificato, restituisci tutte le sistemazioni
        return accomodationRepository.findAll();
    } else if (region != null && city != null) {
        // Se specificati region e città, cerca sistemazioni con quelle caratteristiche
        return accomodationRepository.findByRegionAndCity(region, city);
    } else if (idService != null) {
        // Se specificato idService, cerca sistemazioni con quell'idService
        return accomodationRepository.findByIdService(idService);
    } else {
        // Se i parametri non corrispondono a nessun caso specifico, restituisci tutte le sistemazioni
        return accomodationRepository.findAll();
    }
}

// Restituisci una singola sistemazione in base all'ID
    @GetMapping("/{ID}")
    public Accomodation getAccomodationById(
     @RequestParam(name = "idAccomodation", required = false) Long idAccomodation) {
       if (idAccomodation != null){
        return  accomodationRepository.findById(idAccomodation);
       }

        
    }
}