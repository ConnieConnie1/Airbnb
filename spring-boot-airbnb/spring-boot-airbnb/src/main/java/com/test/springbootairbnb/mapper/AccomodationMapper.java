package com.test.springbootairbnb.mapper;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.percistence.entity.AccomodationEntity;

@Mapper 
public abstract class AccomodationMapper {
	 public abstract AccomodationDTO toDto(AccomodationEntity entity);
	
	 public abstract AccomodationEntity toEntity(AccomodationDTO dto);
}
