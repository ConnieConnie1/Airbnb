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
@Table(name="servizi")
public class Services{
    
	@Id
	@Column(name="ID")
    private Long id;
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ID_ALLOGGIO")
    private Accomodation accomodation;
	
	@Column(name="CUCINA")
    private boolean kitchen;
	@Column(name="PARCHEGGIO")
    private boolean parking;
	@Column(name="BALCONE")
    private boolean balcony;
	@Column(name="FRIGORIFERO")
    private boolean fridge;
	@Column(name="WIFI")
    private boolean wifi;
	@Column(name="GIARDINO")
    private boolean garden;
	@Column(name="ANIMALI_AMMESSI")
    private boolean animalsAdmitted;
	@Column(name="FORNO")
    private boolean oven;
	@Column(name="ASCIUGACAPELLI")
    private boolean hairdryer;
	@Column(name="TV")
    private boolean tv;
	@Column(name="LAVATRICE")
    private boolean washingmachine;
	@Column(name="ARIA_CONDIZIONATA")
    private boolean airconditioning;
	@Column(name="ACCESSO_SPIAGGIA")
    private boolean sea;
	@Column(name="VISTA_MONTAGNA")
    private boolean mountains;
	
	
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "GROUP_ID")
	
	// METODI GETTER
	public Object getIdAlloggio() {
		
		return null;
	}
}
