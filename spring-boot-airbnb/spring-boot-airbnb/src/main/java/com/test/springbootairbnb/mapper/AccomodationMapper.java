package com.test.springbootairbnb.mapper;


import java.util.List;
import java.util.List;
import com.test.springbootairbnb.percistence.entity.*;
import com.test.springbootairbnb.dto.AccomodationDTO;

@Mapper(componentModel="spring")
public interface AccomodationMapper {
	
	List<AccomodationDto> toDtoList(List<AccomodationEntity>):
}
