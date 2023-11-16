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

const ReservationCard = () => {
  const { id } = useParams();
  const [accommodationDetails, setAccommodationDetails] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [guestNum, setGuestNum] = useState(1);

  const cleaningFee = 100;
  const totalPrice = 150 * 3 + cleaningFee; // qui devo mettere variabili per prezzo notte e numero notti

  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);

    // Calcolo numero di notti
    if (arrivalDate) {
        const nightsTot = date.diff(arrivalDate, 'day');
        setNumberOfNights(nightsTot);
    }
  };

  const handleGuestNumChange = (event) => {
    setGuestNum(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/accommodations/${id}`);
        const data = await response.json();
        setAccommodationDetails(data);
      } catch (error) {
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

  return (
    <Paper
      elevation={4}
      square={false}
      sx={{
        p: 2,
        mt: 6,
        mr: 0,
        mb: 2,
        width: "350px",
        position: "sticky",
        top: 0,
      }}
    >
      <Typography
        sx={{ mt: 4, marginY: 2 }}
        variant="h2"
        fontWeight="bold"
        textTransform="sentenceCase"
      >
        € prezzo a notte!
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "flex", gap: "16px", marginY: 4 }}>
          <DatePicker
          
            label="Arrival"
            format="DD/MM/YYYY"
            defaultValue={dayjs()}
            slotProps={{ field: { shouldRespectLeadingZeros: true } }}
          />
          <DatePicker
            label="Departure"
            format="DD/MM/YYYY"
            defaultValue={dayjs()}
            slotProps={{ field: { shouldRespectLeadingZeros: true } }}
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
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      </Box>
    

      <Button
        variant="contained"
        color="secondary"
        fullWidth="true"
        size="large"
        sx={{ mb: 2, mt: 2 }}
      >
        Reserve
      </Button>
      <Typography
        variant="h6"
        sx={{ textTransform: "sentencecase", textAlign: "center" }}
      >
        You won't be charged yet
      </Typography>

      <List sx={{ width: "100%" }}>
        <ListItem>
          <ListItemText
            primary={`€ 150 x  ${numberOfNights} nights`} // ${pricePerNight} ${numberOfNights}
            secondary={`€ ${150 * numberOfNights}`}
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
            secondary={`€ ${totalPrice}`}
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ReservationCard;
