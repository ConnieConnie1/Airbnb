import jcom.test.springbootairbnb.percistence.repository.entity
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

package com.test.springbootairbnb.percistence.entity;

@Entity
public class AccomodationEntity {
    
    private Long id;
    private String nome;
    private String regione;
    private String città;
    private int hostID;
    private int numMaxOspiti;
    private int numLetti;
    private int numBagni;
    private String descrizione;
    private int prezzoNotte;
}
