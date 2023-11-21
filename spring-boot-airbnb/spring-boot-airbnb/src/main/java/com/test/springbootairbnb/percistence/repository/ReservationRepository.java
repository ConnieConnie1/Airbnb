package com.test.springbootairbnb.percistence.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.springbootairbnb.percistence.entity.ReservationEntity;

// La repository è un interfaccia che estende JPA (fornita da Spring Data JPA)
// Qui si definiscono i metodi per interagire con il DB
// Dichiariamo che lavora con oggettid i tipo Entity e ID di tipo Long
public interface ReservationRepository extends JpaRepository<ReservationEntity, Long> {
    

// Metodo per trovare una prenotazione per ID
// L'oggetto restituito è di tipo Optional (può contenere o non contenere un valore)
     Optional<ReservationEntity> findById(Long idReservation);

     
     
 // Query personalizzata in JPQL (java persistence query language)
     
	@Query("SELECT prenotazione FROM ReservationEntity prenotazione WHERE prenotazione.idAlloggio = :idAlloggio AND prenotazione.checkIn >= :dataInizio AND prenotazione.checkOut <= :dataFine")    
	ReservationEntity findByIdAlloggioAndDate(         
	@Param("idAlloggio") Long idAlloggio,         
	@Param("dataInizio") Date checkIn,         
	@Param("dataFine") Date checkOut );

// La dicitura Param indica i parametri della query e sono sostituiti dai valori a seguire
}
