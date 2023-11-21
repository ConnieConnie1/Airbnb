package com.test.springbootairbnb.mapper;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.entity.ReservationEntity;

@Mapper
public abstract class ReservationMapper {
	
	// Converte a DTO
	public abstract ReservationDTO toDto(ReservationEntity entity);

	// converte a Entità
	public abstract ReservationEntity toEntity(ReservationDTO dto);

}
