import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

import img1 from '../img/1-img.jpg'
import img2 from '../img/2-img.jpg'
import img3 from '../img/3-img.jpg'
import img4 from '../img/4-img.jpg'
import img5 from '../img/5-img.jpg'
import img6 from '../img/6-img.jpg'
import img7 from '../img/7-img.jpg'
import img8 from '../img/8-img.jpg'
import img9 from '../img/9-img.jpg'
import img10 from '../img/10-img.jpg'
import img11 from '../img/11-img.jpg'
import img12 from '../img/12-img.jpg'
import img13 from '../img/13-img.jpg'
import img14 from '../img/14-img.jpg'


// Icone react

import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../themes/commonStyles';







const AccomodationCard = ({ location }) => {
  const { id, nome, region, city, prezzoNotte, url } = location;
  if (!location) {
    return null;
  }

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14] 


  return (
<Link to={`/locations/${id}`}>

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
          src={images[id - 1]}
          alt={id}
          sx={{ borderRadius: 4, height: '200px' }}
          style = {{ height: '300px'}}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold"  textTransform= 'none' > {nome}</Typography>
          <Typography variant="h6" textTransform= 'none'> {city}, {region}</Typography>
          <Typography variant="body1" fontWeight="bold" textTransform= 'none' > {prezzoNotte} € a notte</Typography>
  
          </CardContent>
        </CardActionArea>
        
        </Card>
      </Box>
      
      </Link>
  );
};

export default AccomodationCard;