package com.test.springbootairbnb.percistence.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@jakarta.persistence.Entity
@Table(name = "prenotazioni")

public class Reservation {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name="ID")
    private Long idReservation;
	@Column(name = "DATA_INIZIO")
	private Date checkIn;
	@Column(name = "DATA_FINE")
	private Date checkOut;
	@Column(name = "NUM_OSPITI")
	private Integer numGuests;
	@Column(name = "ID_ALLOGGIO")
	private Long idAlloggio;
	@Column(name = "ID_UTENTE")
	private String email;
	@Column(name = "PREZZO_FINALE")
	private Long priceFinal;
	
	

}
