package com.test.springbootairbnb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@CrossOrigin(origins = "http://localhost:3000")


public class ReservationController {

	@Autowired
	private ReservationService reservationService;
	// Richiamo la classe service

	@Autowired
	private ReservationRepository reservationRepository;
	// inietto la repo

	@PostMapping("/create")
	// inserisco nel DB. Gestisco una richiesta HTTP POST.
	public ReservationDTO insertReservation(
			// RequestBody per ricevere i dati della prenotazione come parte del corpo della
			// richiesta HTTP.
			@RequestBody ReservationDTO reservationDTO) {
		return reservationService.save(reservationDTO);
		// Inserire nel DB tramite la service e il suo metodo
	}

	// Restituisco la singola prenotazione in base all'ID
	@GetMapping("/{idReservation}")
	public ReservationDTO findById(@PathVariable(value = "idReservation", required = false) Long idReservation) {
		if (idReservation != null) {
			return reservationService.findById(idReservation);
		} else {
			return null;
		}
	}

	// Cancello in base all'ID che mi viene passato, con DELETE
	@DeleteMapping("/{idReservation}/delete")
	public void deleteReservation(@PathVariable("idReservation") Long idReservation) {
		if (idReservation != null) {
			// Cancella prenotazione in base all'ID fornito
			reservationService.deleteById(idReservation);
		} else {
			throw new IllegalArgumentException("The given id must not be null");
		}
	}
}
