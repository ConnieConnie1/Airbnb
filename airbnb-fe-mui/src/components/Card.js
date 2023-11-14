import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import img from '../img/1-img.jpg'


// Icone react

import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../themes/commonStyles';

import './CarouselCard.css';





const AccomodationCard = ({ location }) => {
  const { id, nome, region, city, prezzoNotte, url } = location;
  if (!location) {
    return null;
  }



  return (
    <Box
      className="Card"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={{ ...fixedIcon, marginTop: 2, marginRight: 1 }}>
        <FaRegHeart size={24} color="#fff" />
      </Box>
          

      <Card sx={flexBetween}>
        <CardActionArea sx={{ mt: 2 }}>
        <CardMedia
          component="img"
          src="https://picsum.photos/200"
          alt={id}
          sx={{ borderRadius: 4, height: '200px' }}
          style = {{ height: '200px'}}
        />
        <CardContent>
          <Typography component="h6" fontWeight="bold" > {nome}</Typography>
          <Typography component="h6"> {city}, {region}</Typography>
          <Typography component="body1" fontWeight="bold"> {prezzoNotte} €</Typography>
          <Typography component="body1" textTransform="lowercase">a notte</Typography>
          </CardContent>
        </CardActionArea>
        
        </Card>
      </Box>
  
  );
};

export default AccomodationCard;