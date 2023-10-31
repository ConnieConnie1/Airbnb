package com.test.springbootairbnb.percistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
    private String region;
	@Column(name="CITTA")
    private String city;
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
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "accomodation")
	private ServiziEntity servizi;
	
	// METODI GETTER
	public Object getIdAlloggio() {
		
		return null;
	}
}
