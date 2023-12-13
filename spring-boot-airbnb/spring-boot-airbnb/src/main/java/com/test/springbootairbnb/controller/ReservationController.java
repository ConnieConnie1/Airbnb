package com.test.springbootairbnb.controller;

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
import com.test.springbootairbnb.exception.CustomReservationException;
import com.test.springbootairbnb.service.ReservationService;

@RestController
@RequestMapping("/reservations")
@CrossOrigin(origins = "http://localhost:3000")

public class ReservationController {

	@Autowired
	private ReservationService reservationService;
	// Richiamo la classe service

	@PostMapping
	// inserisco nel DB. Gestisco una richiesta HTTP POST.
	public ReservationDTO insertReservation(
			// RequestBody per ricevere i dati della prenotazione come parte del corpo della
			// richiesta HTTP.
			@RequestBody ReservationDTO reservationDTO) {

		ReservationDTO response = reservationService.save(reservationDTO);

		if (response == null) {
			throw new CustomReservationException("Questa struttura è già stata prenotata per queste date");
		}
		return response;
		// Inserire nel DB tramite la service e il suo metodo

	}

	// Cancello in base all'ID che mi viene passato, con DELETE
	@DeleteMapping("/{idAlloggio}/deleteReservation")

	public int deleteReservation(
			@PathVariable("idAlloggio") String idAlloggio,
			@RequestParam(name = "email", required = false) String email,
			@RequestParam(name = "checkIn", required = true) String checkIn,
			@RequestParam(name = "checkOut", required = true) String checkOut

	) {
		System.out.println("Inizio chiamata delete");
		// Cancella prenotazione in base all'ID fornito
		return reservationService.deleteReservation(idAlloggio, checkIn, checkOut, email);

	}
}
