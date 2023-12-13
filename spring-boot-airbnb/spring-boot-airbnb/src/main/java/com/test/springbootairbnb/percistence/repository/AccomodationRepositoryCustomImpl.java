package com.test.springbootairbnb.percistence.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Repository;

import com.test.springbootairbnb.percistence.entity.Accomodation;
import com.test.springbootairbnb.percistence.entity.Services;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;



public class AccomodationRepositoryCustomImpl implements AccomodationRepositoryCustom {
// Classe che implementa l'Intefaccia custom repository
	
	@PersistenceContext
	EntityManager em;
// PercistanceContext permette di iniettare istanza di EntityManager, ovvero  colui che gestisce le entità persistenti (oggetti Java che sono memorizzati nel database) 
// Quindi serve per eseguire operazioni CRUD e interagire col DB
	
	@Override
	public List<Accomodation> searchByFilter(String region, String city, Integer numGuests, Integer numBeds,
			Integer numBathrooms, Integer pricePerNight, Boolean kitchen, Boolean parking, Boolean balcony, Boolean fridge,
			Boolean wifi, Boolean garden, Boolean animalsAdmitted, Boolean oven, Boolean hairdryer, Boolean tv, Boolean washingmachine, Boolean airconditiong, Boolean sea, Boolean mountains) {
		
//Criteria Builder: oggetto che costruisce la query (da EntityManager)
		CriteriaBuilder cb = em.getCriteriaBuilder();
		
// CriteriaQuery: specifica su quale tabella fare query (da Criteria Builder)
		CriteriaQuery <Accomodation> cq = cb.createQuery(Accomodation.class);

// Oggetto root: da quale classe del codice recupero info (da Criteria Query)
		Root <Accomodation> root =  cq.from(Accomodation.class);
		
// Predicate: per 
		List <Predicate> predicates = new ArrayList<Predicate>();

// Oggetto JOIN: dichiaro quali sono le due entity da collegare e da root, collego il nome dei servizi che ho dichiarato in AccomodationEntity
		Join<Accomodation, Services> join = root.join("services");
		

		
		
// Controlli per ogni parametro passato
		if (region != null) {
			predicates.add(cb.equal(root.get("region"), region));
			//listaDiPredicati.aggiungi(CriteriaBuilder.uguale(root.prendi('paramtro in Entity'), nome del filtro
			// è come dire SELECT * from tabella(AccomodationEntity) where region = selezione;
		}
		if (city != null) {
			predicates.add(cb.equal(root.get("city"), city ));
		}
		if (numGuests != null) {
			predicates.add(cb.equal(root.get("numMaxOspiti"), numGuests ));
		}
		if (numBeds != null) {
			predicates.add(cb.equal(root.get("numLetti"), numBeds ));
		}
		if (numBathrooms != null) {
			predicates.add(cb.equal(root.get("numBagni"), numBathrooms ));
		}
		if (pricePerNight != null) {
			predicates.add(cb.equal(root.get("prezzoNotte"), pricePerNight ));
		}
// Questi altri filtri sono su un'altra tabella rispetto alloggi (quindi va fatta una JOIN)
		// Invece di root, uso join che ho creato
		
		if (Objects.nonNull(kitchen)) {
			predicates.add(cb.equal(join.get("cucina"), kitchen ));
		}
		if (Objects.nonNull(parking)) {
			predicates.add(cb.equal(join.get("parcheggio"), parking ));
		}
		if (Objects.nonNull(balcony)) {
			predicates.add(cb.equal(join.get("balcone"), balcony ));
		}
		if (Objects.nonNull(fridge)) {
			predicates.add(cb.equal(join.get("frigorifero"), fridge ));
		}
		if (Objects.nonNull(wifi)) {
			predicates.add(cb.equal(join.get("wifi"), wifi ));
		}
		if (Objects.nonNull(garden)) {
			predicates.add(cb.equal(join.get("giardino"), garden ));
		}
		if (Objects.nonNull(animalsAdmitted)) {
			predicates.add(cb.equal(join.get("animaliAmmessi"), animalsAdmitted ));
		}
		if (Objects.nonNull(oven)) {
			predicates.add(cb.equal(join.get("forno"), oven));
		}
		if (Objects.nonNull(hairdryer)) {
			predicates.add(cb.equal(join.get("asciugacapelli"), hairdryer ));
		}
		if (Objects.nonNull(tv)) {
			predicates.add(cb.equal(join.get("tv"), tv ));
		}
		if (Objects.nonNull(washingmachine)) {
			predicates.add(cb.equal(join.get("lavatrice"), washingmachine ));
		}
		if (Objects.nonNull(airconditiong)) {
			predicates.add(cb.equal(join.get("ariacondizionata"), airconditiong ));
		}
		if (Objects.nonNull(sea)) {
			predicates.add(cb.equal(join.get("spiaggia"), sea ));
		}
		if (Objects.nonNull(mountains)) {
			predicates.add(cb.equal(join.get("vistaMontagna"), mountains ));
		}
		
		
		cq.where(predicates.stream().toArray(Predicate[]::new));
		// Questa è la query
		
		TypedQuery<Accomodation> query = em.createQuery(cq);
		//Sta creando la select, contatta il DB
		 
		List<Accomodation> result = query.getResultList();
		
		// to DO da fare la paginazione
		return result;
		
		
	}
	

}
