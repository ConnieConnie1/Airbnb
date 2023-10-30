package com.test.springbootairbnb.percistence.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import com.test.springbootairbnb.percistence.entity.AccomodationEntity;


public interface AccomodationRepository extends JpaRepository<AccomodationEntity, Long>{

    // Dichiaro il metodo per cercare per regione e città, gli passo parametri, mi deve restituire una lista
    // è un metodo astratto, non ci sono le graffe. 
    List<AccomodationEntity> findByRegionAndCity(String region, String city);
    
    //Solo città
    List<AccomodationEntity> findByCity(String city);
    
    //Solo regione
    List<AccomodationEntity> findByRegion(String region);
    
    // Metodo per cercare per ID del servizio
      List<AccomodationEntity> findByServiceId(Long idService);
    
    //Metodo per restituire tutti i csmpi  
      List<AccomodationEntity> findAll();

} 
