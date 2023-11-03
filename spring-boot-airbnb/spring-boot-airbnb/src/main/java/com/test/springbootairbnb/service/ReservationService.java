package com.test.springbootairbnb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.springbootairbnb.dto.ReservationDTO;
import com.test.springbootairbnb.mapper.ReservationMapper;
import com.test.springbootairbnb.percistence.entity.ReservationEntity;
import com.test.springbootairbnb.percistence.repository.*;
@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ReservationMapper reservationMapper;

	
	public ReservationDTO save(ReservationDTO reservationDTO) {
		// Concerto DTO in entità tramite mapper
		ReservationEntity reservationEn = reservationMapper.toEntity(reservationDTO);
		
		// Salvo l'entità nel DB con repo
		ReservationEntity savedReservation = reservationRepository.save(reservationEn);
		
		// Con Mapper converto l'entità in DTO
		return  reservationMapper.toDto(savedReservation);
		}
	
    // gestire le operazioni legate alle prenotazioni

	public ReservationDTO findById(Long idReservation) {
		ReservationEntity entity = reservationRepository.findById(idReservation).orElse(null);
		if (entity != null) {
		return	reservationMapper.toDto(entity);
		}
		return null;
	}

	public void deleteById(Long idReservation) {
		// Metodo per cancellare una prenotazione in base all'ID
		ReservationEntity entityDelete = reservationRepository.findById(idReservation).orElse(null);
		if (entityDelete != null) {
			reservationRepository.delete(entityDelete);
		}
		
	}

	
}
