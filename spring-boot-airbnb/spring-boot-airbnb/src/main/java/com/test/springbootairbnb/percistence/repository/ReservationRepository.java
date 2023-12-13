package com.test.springbootairbnb.percistence.repository;

import java.sql.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.springbootairbnb.percistence.entity.Reservation;



// La repository è un interfaccia che estende JPA (fornita da Spring Data JPA)
// Qui si definiscono i metodi per interagire con il DB
// Dichiariamo che lavora con oggettid i tipo Entity e ID di tipo Long
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    

// Metodo per trovare una prenotazione per ID
// L'oggetto restituito è di tipo Optional (può contenere o non contenere un valore)
     Optional<Reservation> findById(Long idReservation);

     
     
 // Query personalizzata in JPQL (java persistence query language)
     
     @Query("SELECT prenotazione FROM Reservation prenotazione WHERE prenotazione.idAlloggio = :idAlloggio AND ((prenotazione.checkIn BETWEEN :checkIn AND :checkOut) OR (prenotazione.checkOut BETWEEN :checkIn AND :checkOut) OR (:checkIn BETWEEN prenotazione.checkIn AND prenotazione.checkOut) OR (:checkOut BETWEEN prenotazione.checkIn AND prenotazione.checkOut))")
     Reservation findByIdAlloggioAndDate(
         @Param("idAlloggio") Long idAlloggio,
         @Param("checkIn") Date checkIn,
         @Param("checkOut") Date checkOut);


// La dicitura Param indica i parametri della query e sono sostituiti dai valori a seguire

     @Query("DELETE FROM Reservation r WHERE r.idAlloggio = :idAlloggio AND r.checkIn = :checkIn AND r.checkOut = :checkOut AND r.email = :email")
     int deleteByAlloggioAndDatesAndEmail(@Param("idAlloggio") Long idAlloggio, @Param("checkIn") Date checkIn, @Param("checkOut") Date checkOut, @Param("email") String email);

}


