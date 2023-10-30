package com.test.springbootairbnb.percistence.entity;


import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Date;

@Data
@jakarta.persistence.Entity
@Table(name="prenotazioni")

public class ReservationEntity  {


@Id
 @JoinColumn(name="ID")
    private Long idReservation;
 @JoinColumn(name="DATA_INIZIO")
    private Date checkIn;
 @JoinColumn(name="DATA_FINE")
    private Date checkOut;
 @JoinColumn(name="NUM_OSPITI")
    private Integer numeroOspiti;
 @JoinColumn(name="ID_ALLOGGIO")
    private Long idAlloggio;
 @JoinColumn(name="ID_UTENTE")
    private String emailUtente;
    
}
