package com.test.springbootairbnb.percistence.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.springbootairbnb.percistence.entity.Accomodation;


public interface AccomodationRepository extends JpaRepository<Accomodation, Long>, AccomodationRepositoryCustom{

  
    

} 
