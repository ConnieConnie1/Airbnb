package com.test.springbootairbnb.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.mapper.ReservationMapper;
import com.test.springbootairbnb.percistence.entity.Reservation;
import com.test.springbootairbnb.percistence.repository.*;

@Service
public class ReservationService {

//  Iniezione Mapper e Repository
	@Autowired
	private ReservationRepository reservationRepository;

	@Autowired
	private ReservationMapper reservationMapper;

// Metodo per salvare una nuova prenotazione
	public ReservationDTO save(ReservationDTO reservationDTO) {

// Se non c'è già una prenotazione per lo stesso alloggio/periodo, salva
		boolean areDatesAvailable = areDatesAvailable(reservationDTO.getIdAlloggio(), reservationDTO.getCheckIn(),
				reservationDTO.getCheckOut());
		if (areDatesAvailable) {

			// Converto DTO in entità, tramite mapper
			Reservation reservation = reservationMapper.toEntity(reservationDTO);

			// Salvo l'entità nel DB con repository
			Reservation savedReservation = reservationRepository.save(reservation);

			// Con Mapper converto l'entità in DTO
			return reservationMapper.toDto(savedReservation);
		}
		// dire al frontend che non può essere fatta la prenotazione, perché esiste già
		// una prenotazione per stesso periodo
		return null;

	}

// Metodo per cancellare una prenotazione in base all ID
	public int deleteReservation(String idAlloggio, String checkIn, String checkOut, String email) {
		// Trovo l'entità da cancellare
		return 0;
		// toDo da implementare

	}

// Metodo per verificare se esiste già una prenotazione per stesso alloggio e date
	public boolean areDatesAvailable(Long idAlloggio, Date checkIn, Date checkOut) {

// Creo un entità in base ad alloggio e date
// Richiamo la query personalizzata che ho creato nella repository. 
		Reservation reservationEn = reservationRepository.findByIdAlloggioAndDate(idAlloggio, checkIn, checkOut);

// Ritorna true, se oggetto è null, quindi c'è una sovrapposizione. 
		return Objects.isNull(reservationEn);

	}

}