package com.test.springbootairbnb.mapper;

import org.mapstruct.Mapper;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.entity.Reservation;

@Mapper
public abstract class ReservationMapper {
	
	// Converte a DTO
	public abstract ReservationDTO toDto(Reservation entity);

	// converte a Entità
	public abstract Reservation toEntity(ReservationDTO dto);

}
