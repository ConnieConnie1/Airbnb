import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Header from "../components/Header";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OptionsFilter from "../components/OptionsFilter";
import Container from "@mui/material/Container";
import LocationsCard from "../components/LocationsCard";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import FooterMenu from "../components/FooterMenu";
import ReservationCard from "../components/ReservationCard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import {
  displayOnDesktop,
  flexBetween,
  flexCenter,
} from "../themes/commonStyles";
import { accomodationService } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import { pink } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import img1 from "../img/1-img.jpg";
import img2 from "../img/2-img.jpg";
import img3 from "../img/3-img.jpg";
import img4 from "../img/4-img.jpg";
import img5 from "../img/5-img.jpg";
import img6 from "../img/6-img.jpg";
import img7 from "../img/7-img.jpg";
import img8 from "../img/8-img.jpg";
import img9 from "../img/9-img.jpg";
import img10 from "../img/10-img.jpg";
import img11 from "../img/11-img.jpg";
import img12 from "../img/12-img.jpg";
import img13 from "../img/13-img.jpg";
import img14 from "../img/14-img.jpg";
import avatar from "../img/avatar-img.jpg";

import Avatar from "@mui/material/Avatar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";


import {
  PiWavesLight,
  PiCookingPotLight,
  PiMountainsLight,
  PiPawPrintThin,
  PiTelevisionThin,
  PiPottedPlantThin,
} from "react-icons/pi";
import { RiParkingLine } from "react-icons/ri";
import { CiWifiOn } from "react-icons/ci";
import ReservationDelete from "../components/ReservationDelete";

const locationsTab = [
  { id: 1, title: "Sea", icon: <PiWavesLight size={36} /> },
  { id: 2, title: "Kitchen", icon: <PiCookingPotLight size={36} /> },
  { id: 3, title: "Mountain view", icon: <PiMountainsLight size={36} /> },
  { id: 4, title: "Animals admitted", icon: <PiPawPrintThin size={36} /> },
  { id: 5, title: "TV", icon: <PiTelevisionThin size={36} /> },
  { id: 6, title: "Balcony", icon: <PiPottedPlantThin size={36} /> },
  { id: 7, title: "Free parking", icon: <RiParkingLine size={36} /> },
  { id: 8, title: "Wifi", icon: <CiWifiOn size={36} /> },
];

const AccomodationPage = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  const { id } = useParams(); // Prendo l'id dalla URL
  const [accommodationDetails, setAccommodationDetails] = useState(null);

  const [open, setOpen] = React.useState(false);

  const [deleteSuccess, setDeleteSuccess] = useState(false);


  const [userEmail, setUserEmail] = useState("");
  const [arrivalDate, setArrivalDate] = useState(dayjs());
  const [departureDate, setDepartureDate] = useState(dayjs());

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value); // Aggiorna lo stato con il valore inserito dall'utente
  };
  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
    
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    
  };

  useEffect(() => {
    // Esegui il caricamento dei dettagli dell'alloggio in base all'id
    // Questo potrebbe coinvolgere una chiamata API o l'accesso a un elenco preesistente di alloggi
    // Assicurati di gestire il caricamento dei dati in modo asincrono
    const fetchData = async () => {
      // Esempio: Simula una chiamata API asincrona per ottenere i dettagli dell'alloggio
      // Sostituisci questa parte con la tua logica effettiva di recupero dei dati
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

  // Per mandare i dati al BE, una volta che clicco bottone 'Delete reservation' e cancellare la prenotazione
  const handleDeleteReservation = async () => {
    const reservationData = {
      idAlloggio: id,
      email: userEmail,
      checkIn : arrivalDate.format('YYYY-MM-DD'),
      checkOut: departureDate.format('YYYY-MM-DD')
      
    };
    try {
      const response = await accomodationService.deleteReservation(reservationData);
      // console.log('Risposta del backend:', response); // Mostra la risposta del backend in console
    
      // setBackendResponse(response.data);
      if (response) {
        setDeleteSuccess(true);
      } else {
        setDeleteSuccess(false);
      }
    } catch (error) {
      setDeleteSuccess(false);
      console.error("Errore nella cancellazione: ", error);
    }
  };

  if (!accommodationDetails) {
    return;
    <Box>
      <CircularProgress color={pink[500]} />
    </Box>;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Box>
          <Header />
        </Box>
        <Box sx={{ marginX: 6 }}>
          <Typography
            sx={{ mt: 4 }}
            variant="h1"
            fontWeight="bold"
            textTransform="sentenceCase"
          >
            {accommodationDetails.name}
          </Typography>

          <CardMedia
            sx={{ mt: 4, borderRadius: 4 }}
            component="img"
            height="400"
            src={images[id - 1]}
            alt={accommodationDetails.name}
          />
        </Box>
        <Grid container spacing={4} sx={{ marginX: 6 }}>
          <Grid item xs={12} md={7}>
            <Box mt={4}>
              <Typography
                variant="h2"numMax
                fontWeight="bold"
                textTransform="sentenceCase"
                sx={{ mt: 4 }}
              >
                Intero alloggio a {accommodationDetails.city},{" "}
                {accommodationDetails.region}
              </Typography>
              <Typography
                variant="body1"
                textTransform="sentenceCase"
                sx={{ mt: 1 }}
              >
                {accommodationDetails.maxNumGuests} guests -{" "}
                {accommodationDetails.numBeds} beds -{" "}
                {accommodationDetails.numBathrooms} bathrooms
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  pb: 4,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Avatar
                  sx={{ width: 48, height: 48 }}
                  alt="Host photo"
                  src={avatar}
                />
                <Box>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    textTransform="sentenceCase"
                  >
                    Hosted by {accommodationDetails.hostId}
                  </Typography>
                  <Typography variant="h2" textTransform="sentenceCase">
                    Dati sull'host da prendere da DB
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Box sx={{ pb: 4 }}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  textTransform="sentenceCase"
                  sx={{ mt: 4 }}
                >
                  About the place
                </Typography>
                <Typography
                  sx={{ mt: 4 }}
                  variant="body1"
                  textTransform="sentenceCase"
                >
                  {accommodationDetails.description}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ pb: 4 }}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  textTransform="sentenceCase"
                  sx={{ mt: 4 }}
                >
                  What this place offers
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                  {locationsTab.map((item) => (
                    <Grid item xs={6} key={item.id}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon style={{ color: "#333" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.title}
                            style={{ color: "#333" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant="outlined"
                  fullWidth="true"
                  size="large"
                  sx={{ mb: 2 }}
                >
                  View all amenities
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ paddingRight: 2 }}>
            <ReservationCard
              id={accommodationDetails.id}
              pricePerNight={accommodationDetails.pricePerNight}
            />
          </Grid>
        </Grid>
        <Divider sx={{ pb: 4, marginX: 6 }} />
        <Box sx={{ pb: 4, marginX: 6 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            textTransform="sentenceCase"
            sx={{ mt: 4 }}
          >
            Where you'll be
          </Typography>
          <CardMedia sx={{ mt: 2, mb: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3187938844167!2d-0.166688424484128!3d51.50736711070717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876054929181a85%3A0xd1af6c4f49b4bd0c!2sHyde%20Park!5e0!3m2!1sit!2sit!4v1699972340462!5m2!1sit!2sit"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardMedia>

          <Button
            // onClick={handleReservation}
            variant="contained"
            color="secondary"
            fullWidth="true"
            size="large"
            onClick={handleClickOpen}
            sx={{ mb: 2, mt: 2, borderRadius: 2 }}
          >
            Remove reservation for this accomodation
          </Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose} sx={{minWidth: '300px'}}>
            <DialogTitle sx={{ textTransform: "uppercase", fontWeight: 800 }}>
              Remove your reservation
            </DialogTitle>
            <DialogContent>
              <TextField
                id="outlined-basic"
                label="E-mail used for the reservation"
                variant="outlined"
                fullWidth= "true"
                value={userEmail}
                onChange={handleEmailChange}
              />
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
            </DialogContent>
            <DialogActions sx={{ ...flexBetween, pl: 2.5, pr: 2.5 }}>
              <Button variant="text" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
              onClick={handleDeleteReservation}
                variant="contained"
                color="secondary" /*  onClick={handleShowAccomodations} */
              >
                Delete reservation
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AccomodationPage;
