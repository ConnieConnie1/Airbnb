package com.test.springbootairbnb.percistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="alloggi")
public class AccomodationEntity{
    
	@Id
	@Column(name="ID")
    private Long id;
	@Column(name="NOME")
    private String nome;
	@Column(name="REGIONE")
    private String regione;
	@Column(name="CITTA")
    private String citta;
	@Column(name="HOST_ID")
    private int hostID;
	@Column(name="NUM_MAX_OSPITI")
    private int numMaxOspiti;
	@Column(name="NUM_LETTI")
    private int numLetti;
	@Column(name="NUM_BAGNI")
    private int numBagni;
	@Column(name="DESCRIZIONE")
    private String descrizione;
	@Column(name="PREZZO_BASE_NOTTE")
    private int prezzoNotte;
}
