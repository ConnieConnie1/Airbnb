package com.test.springbootairbnb.mapper;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.percistence.entity.Accomodation;

@Mapper 
public abstract class AccomodationMapper {
	
	 public abstract AccomodationDTO toDto(Accomodation entity);
	
	 public abstract Accomodation toEntity(AccomodationDTO dto);
}
