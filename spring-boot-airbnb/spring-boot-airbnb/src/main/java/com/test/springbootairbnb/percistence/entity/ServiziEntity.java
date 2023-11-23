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
public class ServiziEntity{
    
	@Id
	@Column(name="ID")
    private Long id;
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ID_ALLOGGIO")
    private AccomodationEntity accomodation;
	
	@Column(name="CUCINA")
    private boolean cucina;
	@Column(name="PARCHEGGIO")
    private boolean parcheggio;
	@Column(name="BALCONE")
    private boolean balcone;
	@Column(name="FRIGORIFERO")
    private boolean frigorifero;
	@Column(name="WIFI")
    private boolean wifi;
	@Column(name="GIARDINO")
    private boolean giardino;
	@Column(name="ANIMALI_AMMESSI")
    private boolean animaliAmmessi;
	@Column(name="FORNO")
    private boolean forno;
	@Column(name="ASCIUGACAPELLI")
    private boolean asciugacapelli;
	@Column(name="TV")
    private boolean tv;
	@Column(name="LAVATRICE")
    private boolean lavatrice;
	@Column(name="ARIA_CONDIZIONATA")
    private boolean ariacondizionata;
	@Column(name="ACCESSO_SPIAGGIA")
    private boolean spiaggia;
	@Column(name="VISTA_MONTAGNA")
    private boolean vistaMontagna;
	
	
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "GROUP_ID")
	
	// METODI GETTER
	public Object getIdAlloggio() {
		
		return null;
	}
}
