package com.test.springbootairbnb.mapper;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.entity.ReservationEntity;

@Mapper
public abstract class ReservationMapper {
	public abstract ReservationDTO toDto(ReservationEntity entity);

	// concerte a Entità
	public abstract ReservationEntity toEntity(ReservationDTO dto);

}
