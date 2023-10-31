package com.test.springbootairbnb.mapper;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.percistence.entity.ReservationEntity;

public interface ReservationMapper {
	// converte a DTO
	ReservationDTO toDto(ReservationEntity entity);

	// concerte a Entità
	ReservationEntity toEntity(ReservationDTO dto);

}
