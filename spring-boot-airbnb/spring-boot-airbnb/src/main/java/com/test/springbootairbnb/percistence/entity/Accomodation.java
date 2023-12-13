package com.test.springbootairbnb.percistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name="alloggi")
public class Accomodation{
    //Questa è l'entity
	
	@Id
	@Column(name="ID")
    private Long id;
	@Column(name="NOME")
    private String name;
	@Column(name="REGIONE")
    private String region;
	@Column(name="CITTA")
    private String city;
	@Column(name="HOST_ID")
    private int hostID;
	@Column(name="NUM_MAX_OSPITI")
    private int maxNumGuests;
	@Column(name="NUM_LETTI")
    private int numBeds;
	@Column(name="NUM_BAGNI")
    private int numBathrooms;
	@Column(name="DESCRIZIONE")
    private String description;
	@Column(name="PREZZO_BASE_NOTTE")
    private int pricePerNight;
	@Column (name="URL")
	private String url;
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "accomodation")
	private Services services;
	

}