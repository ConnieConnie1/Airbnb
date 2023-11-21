import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { accomodationService } from "../api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReservationConfirmation from "./ReservationConfirmation";


const ReservationCard = ({id, prezzoNotte}) => {
 
  const [accommodationDetails, setAccommodationDetails] = useState(null);
  
  const [arrivalDate, setArrivalDate] = useState(dayjs());
  const [departureDate, setDepartureDate] = useState(dayjs());
  
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [guestNum, setGuestNum] = useState(1);

  const [totalPriceValue, setTotalPriceValue] = useState(0);
  const [cleaningFee, setCleaningFee] = useState(100);

  const [userEmail, setUserEmail] = useState('');

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [backendResponse, setBackendResponse] = useState(null);

  useEffect(() => {
    const totalPriceValue = prezzoNotte * numberOfNights + cleaningFee;
    setTotalPriceValue(totalPriceValue);
  }, [prezzoNotte, numberOfNights, cleaningFee]);
  
 


  // Per aggiornare date arrivo e partenza del DatePicker, richiamano il calcolatore del numero di notti, così da aggiornare il calcolo
  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
    calculateNumberOfNights(date, departureDate)
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    calculateNumberOfNights(arrivalDate, date);
  };

  // calcolo il numero di notti
  const calculateNumberOfNights = (arrival, departure) => {
    const nights = dayjs(departure).diff(arrival, 'day');
    setNumberOfNights(nights);
  }

  const handleGuestNumChange = (event) => {
    setGuestNum(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value); // Aggiorna lo stato con il valore inserito dall'utente
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/accommodations/${id}`);
        const data = await response.json();
        setAccommodationDetails(data);
        // Chiamata ha successo, codice di stato HTTP 200
      
      } catch (error) { //Errore, chiamata fallita
        console.error("Errore nel prendere i dati dell'alloggio: ", error);
      }
      
      try {
        const response = await accomodationService.getAccomodationById(id);
        setAccommodationDetails(response.data);
      } catch (error) {
        console.error("Error getting accommodation details: ", error);
      }
    };
    fetchData();
  }, [id]);

  // Per mandare i dati al BE, una volta che clicco bottone 'Reserve'
  const handleReservation = async () => {
    const reservationData = {
      checkIn : arrivalDate.format('YYYY-MM-DD'),
      checkOut: departureDate.format('YYYY-MM-DD'),
      numeroOspiti: guestNum,
      idAlloggio: id,
      email: userEmail,
      priceFinal: totalPriceValue,
    };
    try {
      const response = await accomodationService.createReservation(reservationData);
      console.log('Risposta del backend:', response); // Mostra la risposta del backend in console
    
      setBackendResponse(response.data);
    
      if (response.data === '') {
        console.log('Sovrapposizione date', response.data);
        setShowConfirmation(true);
        setReservationSuccess(false);
      } else if (response.success) {
        console.log('Prenotazione avvenuta', response.data);
        setReservationSuccess(true);
        setShowConfirmation(true);
      } else {
        console.error('Errore durante la prenotazione', response.error);
        setReservationSuccess(false);
      }
    } catch (error) {
      console.error('Errore durante la prenotazione', error);
      setReservationSuccess(false);
      setShowConfirmation(true);
    }
  }

 

  return (
    <Paper
      elevation={4}
      square={false}
      sx={{
        p: 2,
        mt: 6,
        mr: 0,
        mb: 2,
        width: "380px",
        position: "sticky",
        top: 0,
        borderRadius: 4,
      }}
    >
      <Typography
        sx={{ mt: 4, marginY: 2 }}
        variant="h2"
        fontWeight="bold"
        textTransform="sentenceCase"
      >
        € {prezzoNotte} night
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "flex", gap: "16px", marginY: 4 }}>
          <DatePicker
          
            label="Arrival"
            format="DD/MM/YYYY"
            defaultValue={dayjs()}
            value={arrivalDate}
            slotProps={{ field: { shouldRespectLeadingZeros: true } }}
            onChange={(date)=> handleArrivalDateChange(date)}
          />
          <DatePicker
            label="Departure"
            format="DD/MM/YYYY"
            defaultValue={dayjs().add(1, 'day')} // per aggiungere un giorno dopo, quella odierna
            slotProps={{ field: { shouldRespectLeadingZeros: true } }}
            value = {departureDate}
            onChange={(date) => handleDepartureDateChange(date)}
          />
        </Box>
      </LocalizationProvider>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", marginY: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="guests-label">Guests</InputLabel>
          <Select
            labelId="guests-label"
            id="guests-select"
            value={guestNum}
            onChange={handleGuestNumChange}
          
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>

          
        </FormControl>
        <TextField 
        id="outlined-basic" 
        label="E-mail" 
        variant="outlined" 
        value={userEmail}
        onChange={handleEmailChange}/>
      </Box>
    

      <Button
        onClick={handleReservation}
        variant="contained"
        color="secondary"
        fullWidth="true"
        size="large"
        sx={{ mb: 2, mt: 2 }}
      >
        Reserve
      </Button>

      {showConfirmation && (
  <ReservationConfirmation success={reservationSuccess } response={backendResponse} /> //Se showConfirmation è true, allora renderizza ReservationConfirmation
)}

      <Typography
        variant="h6"
        sx={{ textTransform: "sentencecase", textAlign: "center" }}
      >
        You won't be charged yet
      </Typography>

      <List sx={{ width: "100%" }}>
        <ListItem>
          <ListItemText
            primary={`€ ${prezzoNotte} x  ${numberOfNights} nights`} 
            secondary={`€ ${prezzoNotte * numberOfNights}`}
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Cleaning fee"
            secondary={`€ ${cleaningFee}`}
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Total"
            secondary={`€ ${totalPriceValue}`}
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ReservationCard;
