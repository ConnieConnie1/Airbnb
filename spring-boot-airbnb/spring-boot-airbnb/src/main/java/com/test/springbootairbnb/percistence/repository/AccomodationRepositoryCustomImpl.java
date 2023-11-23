package com.test.springbootairbnb.percistence.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Repository;

import com.test.springbootairbnb.percistence.entity.AccomodationEntity;
import com.test.springbootairbnb.percistence.entity.ServiziEntity;

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
	public List<AccomodationEntity> searchByFilter(String region, String city, Integer numMaxOspiti, Integer numLetti,
			Integer numBagni, Integer prezzoNotte, Boolean cucina, Boolean parcheggio, Boolean balcone, Boolean frigorifero,
			Boolean wifi, Boolean giardino, Boolean animaliAmmessi, Boolean forno, Boolean asciugacapelli, Boolean tv, Boolean lavatrice, Boolean ariacondizionata, Boolean spiaggia, Boolean vistaMontagna) {
		
//Criteria Builder: oggetto che costruisce la query (da EntityManager)
		CriteriaBuilder cb = em.getCriteriaBuilder();
		
// CriteriaQuery: specifica su quale tabella fare query (da Criteria Builder)
		CriteriaQuery <AccomodationEntity> cq = cb.createQuery(AccomodationEntity.class);

// Oggetto root: da quale classe del codice recupero info (da Criteria Query)
		Root <AccomodationEntity> root =  cq.from(AccomodationEntity.class);
		
// Predicate: per 
		List <Predicate> predicates = new ArrayList<Predicate>();

// Oggetto JOIN: dichiaro quali sono le due entity da collegare e da root, collego il nome dei servizi che ho dichiarato in AccomodationEntity
		Join<AccomodationEntity, ServiziEntity> join = root.join("servizi");
		

		
		
// Controlli per ogni parametro passato
		if (region != null) {
			predicates.add(cb.equal(root.get("region"), region));
			//listaDiPredicati.aggiungi(CriteriaBuilder.uguale(root.prendi('paramtro in Entity'), nome del filtro
			// è come dire SELECT * from tabella(AccomodationEntity) where region = selezione;
		}
		if (city != null) {
			predicates.add(cb.equal(root.get("city"), city ));
		}
		if (numMaxOspiti != null) {
			predicates.add(cb.equal(root.get("numMaxOspiti"), numMaxOspiti ));
		}
		if (numLetti != null) {
			predicates.add(cb.equal(root.get("numLetti"), numLetti ));
		}
		if (numBagni != null) {
			predicates.add(cb.equal(root.get("numBagni"), numBagni ));
		}
		if (prezzoNotte != null) {
			predicates.add(cb.equal(root.get("prezzoNotte"), prezzoNotte ));
		}
// Questi altri filtri sono su un'altra tabella rispetto alloggi (quindi va fatta una JOIN)
		// Invece di root, uso join che ho creato
		
		if (Objects.nonNull(cucina)) {
			predicates.add(cb.equal(join.get("cucina"), cucina ));
		}
		if (Objects.nonNull(parcheggio)) {
			predicates.add(cb.equal(join.get("parcheggio"), parcheggio ));
		}
		if (Objects.nonNull(balcone)) {
			predicates.add(cb.equal(join.get("balcone"), balcone ));
		}
		if (Objects.nonNull(frigorifero)) {
			predicates.add(cb.equal(join.get("frigorifero"), frigorifero ));
		}
		if (Objects.nonNull(wifi)) {
			predicates.add(cb.equal(join.get("wifi"), wifi ));
		}
		if (Objects.nonNull(giardino)) {
			predicates.add(cb.equal(join.get("giardino"), giardino ));
		}
		if (Objects.nonNull(animaliAmmessi)) {
			predicates.add(cb.equal(join.get("animaliAmmessi"), animaliAmmessi ));
		}
		if (Objects.nonNull(forno)) {
			predicates.add(cb.equal(join.get("forno"), forno));
		}
		if (Objects.nonNull(asciugacapelli)) {
			predicates.add(cb.equal(join.get("asciugacapelli"), asciugacapelli ));
		}
		if (Objects.nonNull(tv)) {
			predicates.add(cb.equal(join.get("tv"), tv ));
		}
		if (Objects.nonNull(lavatrice)) {
			predicates.add(cb.equal(join.get("lavatrice"), lavatrice ));
		}
		if (Objects.nonNull(ariacondizionata)) {
			predicates.add(cb.equal(join.get("ariacondizionata"), ariacondizionata ));
		}
		if (Objects.nonNull(spiaggia)) {
			predicates.add(cb.equal(join.get("spiaggia"), spiaggia ));
		}
		if (Objects.nonNull(vistaMontagna)) {
			predicates.add(cb.equal(join.get("vistaMontagna"), vistaMontagna ));
		}
		
		
		cq.where(predicates.stream().toArray(Predicate[]::new));
		// Questa è la query
		
		TypedQuery<AccomodationEntity> query = em.createQuery(cq);
		//Sta creando la select, contatta il DB
		 
		List<AccomodationEntity> result = query.getResultList();
		
		return result;
		
		
	}
	

}
