package com.test.springbootairbnb.percistence.repository;

import java.sql.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.springbootairbnb.percistence.entity.ReservationEntity;

public interface ReservationRepository extends JpaRepository<ReservationEntity, Long> {
    
    // Metodi: inserisci prenotazione, ottieni con id, elimina prenotazione

     // ReservationRepository saveReservation(Date checkIn, Date checkOut, Integer numeroOspiti, String numeroTelefono);

     Optional<ReservationEntity> findById(Long idReservation);

     // void deleteReservationById(Long reservationID);

}
