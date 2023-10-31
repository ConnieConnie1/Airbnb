package com.test.springbootairbnb.mapper;


import java.util.List;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.AccomodationDTO;
import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.entity.AccomodationEntity;
import com.test.springbootairbnb.percistence.entity.ReservationEntity;

import java.util.List;

@Mapper
public interface AccomodationMapper {
	 AccomodationDTO toDto(AccomodationEntity entity);
	
	 AccomodationEntity toEntity(AccomodationDTO dto);
}
