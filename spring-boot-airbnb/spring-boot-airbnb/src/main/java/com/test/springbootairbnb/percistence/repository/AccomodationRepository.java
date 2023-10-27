package com.test.springbootairbnb.percistence.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.com.test.springbootairbnb.percistence.entity.AccomodationEntity;

// Interfaccia che estende l'entità?

public interface AccomodationRepository extends JpaRepository<AccomodationEntity, Long>{

    // Dichiaro il metodo per cercare per regione e città, gli passo parametri, mi deve restituire una lista
    // è un metodo astratto, non ci sono le graffe. 
    List<AccomodationEntity> findByRegionAndCity(String region, String city);
    

    // Metodo per cercare per ID
      List<AccomodationEntity> findByServiceId(Long idService);

} 
