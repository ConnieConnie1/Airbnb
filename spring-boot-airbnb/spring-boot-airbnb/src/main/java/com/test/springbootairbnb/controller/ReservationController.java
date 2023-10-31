package com.test.springbootairbnb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.repository.*;
import com.test.springbootairbnb.service.ReservationService;

@RestController
@RequestMapping("/reservations")

public class ReservationController {

    @Autowired
    private ReservationService reservationService;
    // Richiamo la classe service
    
    @Autowired
    private ReservationRepository reservationRepository;
    // inietto la repo
    
    @PostMapping
    // inserisco nel DB. Gestisco una richiesta HTTP POST.
    public ReservationDTO insertReservation(
    //RequestBody per ricevere i dati della prenotazione come parte del corpo della richiesta HTTP.
    @RequestBody ReservationDTO reservationDTO) {
        return reservationService.save(reservationDTO);
        // Inserire nel DB tramite la service e il suo metodo
    }
    
    // Restituisco la singola prenotazione in base all'ID
    @GetMapping("/{id}")
    public ReservationDTO getReservationbyID(
    		@RequestParam (value ="idReservation", required = false) Long idReservation) {
        if (idReservation != null) {
    	return reservationService.findById(idReservation);
        }
        return null;
    }
    
    // Cancello in base all'ID che mi viene passato, con DELETE
    @DeleteMapping("/{id}")
	public void deleteReservation(@RequestParam(value = "idReservation", required = false) Long idReservation) {
		// Implementa la logica per cancellare una prenotazione in base all'ID
		reservationService.deleteById(idReservation);

		// Elimino dal DB

	}
}
