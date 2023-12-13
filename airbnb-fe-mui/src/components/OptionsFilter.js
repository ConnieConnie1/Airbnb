import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { FaFilter } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { dFlex, flexBetween } from "../themes/commonStyles";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GiComb } from "react-icons/gi";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


// Icone
import {
  PiWavesLight,
  PiCookingPotLight,
  PiMountainsLight,
  PiPawPrintThin,
  PiTelevisionThin,
  PiPottedPlantThin,
  PiDropLight,
  PiFireSimpleLight,
  PiFishThin,
} from "react-icons/pi";
import { RiParkingLine } from "react-icons/ri";
import { CiWifiOn } from "react-icons/ci";
import { TiHairdryer } from "react-icons/ti";
import { Divider, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { accomodationService } from "../api";

// Dati dei filtri-icone
const locationsTab = [
  { id: 1, title: "Sea", icon: <PiWavesLight size={22} /> },
  { id: 2, title: "Kitchen", icon: <PiCookingPotLight size={22} /> },
  { id: 3, title: "Mountains", icon: <PiMountainsLight size={22} /> },
  { id: 4, title: "Animals", icon: <PiPawPrintThin size={22} /> },
  { id: 5, title: "TV", icon: <PiTelevisionThin size={22} /> },
  { id: 6, title: "Balcony", icon: <PiPottedPlantThin size={22} /> },
  { id: 7, title: "Parking", icon: <RiParkingLine size={22} /> },
  { id: 8, title: "Wifi", icon: <CiWifiOn size={22} /> },
  { id: 9, title: "Fridge", icon: <PiFishThin size={22} /> },
  { id: 10, title: "Oven", icon: <PiFireSimpleLight size={22} /> },
  { id: 11, title: "Hairdryer", icon: <GiComb size={22} /> },
  { id: 12, title: "Airconditioning", icon: <PiDropLight size={22} /> },
];



const OptionsFilter = ({setAccomodations}) => {
  // Variabili 

  const [open, setOpen] = React.useState(false);
  // const [accomodations, setAccomodations] = useState([]);

  const [guests, setGuests] = React.useState(null);
  const [beds, setBeds] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  // Amenities
  const [kitchenCheck, setKitchenCheck] = useState (null);
  const [parkingCheck, setParkingCheck] = useState (null);
  const [balconyCheck, setBalconyCheck] = useState (null);
  const [fridgeCheck, setFridgeCheck] = useState (null);
  const [wifiCheck, setWifiCheck] = useState (null);
  const [gardenCheck, setGardenCheck] = useState(null);
  const [animalsCheck, setAnimalsCheck] = useState (null);
  const [ovenCheck, setOvenCheck] = useState (null);
  const [hairdryerCheck, sethairdryerCheck] = useState (null);
  const [tvCheck, setTvCheck] = useState (null);
  const [washingmachineCheck, setWashingmachineCheck] = useState (null);
  const [airconditioningCheck, setAirconditioningCheck] = useState (null);
  const [seaCheck, setSeaCheck] = useState (null);
  const [mountainCheck, setMountainCheck] = useState (null);

  // Funzioni per la gestione cambiamenti nei filtri
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };


  const handleGuestsChange = (event) => {
    setGuests(Number(event.target.value) || "");
  };

  const handleBedsChange = (event) => {
    setBeds(Number(event.target.value) || "");
  };

  const handleBathroomsChange = (event) => {
    setBathrooms(Number(event.target.value) || "");
  };

  // per le amenities
  const handleKitchenChange = (event) => {
    setKitchenCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleParkingChange = (event) => {
    setParkingCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleBalconyChange = (event) => {
    setBalconyCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleFridgeChange = (event) => {
    setFridgeCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleWifiChange = (event) => {
    setWifiCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleGardenChange = (event) => {
    setGardenCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleAnimalChange = (event) => {
    setAnimalsCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleOvenChange = (event) => {
    setOvenCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleHairDryerChange = (event) => {
    sethairdryerCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleTvChange = (event) => {
    setTvCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleWashingmachineChange = (event) => {
    setWashingmachineCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleAirconditioningChange = (event) => {
    setAirconditioningCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleSeaChange = (event) => {
    setSeaCheck(event.target.checked ? event.target.checked : null);
  };
  
  const handleMountainChange = (event) => {
    setMountainCheck(event.target.checked ? event.target.checked : null);
  };
  

  // Metodo per il filtro e invio dei dati al backend
  const handleShowAccomodations = () => {
    // Dati da inviare al Backend, raccolti in oggetto filters
    const filters = {
      maxNumGuests: guests,
      numBeds: beds,
      numBathrooms: bathrooms,
      kitchen: kitchenCheck,
      parking: parkingCheck,
      balcony: balconyCheck,
      fridge: fridgeCheck,
      wifi: wifiCheck,
      garden: gardenCheck,
      animalsAdmitted: animalsCheck,
      oven: ovenCheck,
      hairdryer: hairdryerCheck,
      tv: tvCheck,
      washingmachine: washingmachineCheck,
      airconditioning: airconditioningCheck,
      sea: seaCheck,
      mountain: mountainCheck
  };
    
  handleClose(); // Chiudi la modale

  //chiamata a backend
  accomodationService.getAllAccomodations(filters)
  .then((response)=>{
    setAccomodations(response.data);
  })
  .catch((error) => {
    console.error('Errore nel prendere i dati filtrati: ', error)
  })

  
  };


  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.title} />;
          })}
        </Tabs>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{
            display: { xs: "none", md: "block" },
            // border: '1px solid #ddd',
            // minWidth: 120,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            paddingX: 4,
          }}
          onClick={handleClickOpen}
        >
          <FaFilter /> Filters
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle 
          sx={{textTransform: "uppercase", fontWeight: 800}}>Rooms and beds</DialogTitle>
          <DialogContent>
            <Box >
              <Typography variant="h1" component="h2" sx={{py: 2}}>
                Guests
              </Typography>
              <ToggleButtonGroup
               sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}
              value={guests}
              exclusive
              onChange={(event, newGuests) => setGuests(newGuests)}
            >
              {[1, 2, 3, 4, 5,6,7,8].map((value) => (
                <ToggleButton key={value} value={value} sx={{ pl: 3, pr: 3,  "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.secondary.main,
                  color: "#fff",
                }}}>
                  {value}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
              <Typography variant="h1" component="h2"  sx={{py: 2}}>
                Bedrooms
              </Typography>
              <ToggleButtonGroup
               sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}
              value={beds}
              exclusive
              onChange={(event, newBeds) => setBeds(newBeds)}
            >
              {[1, 2, 3, 4, 5,6,7,8].map((value) => (
                <ToggleButton key={value} value={value} sx={{ pl: 3, pr: 3,  "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.secondary.main,
                  color: "#fff",
                }}}>
                  {value}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
              <Typography variant="h1" component="h2"  sx={{py: 2}}>
                Bathrooms
              </Typography>
              <ToggleButtonGroup
               sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}
              value={bathrooms}
              exclusive
              onChange={(event, newBathrooms) => setBathrooms(newBathrooms)}
            >
              {[1, 2, 3, 4, 5,6,7,8].map((value) => (
                <ToggleButton key={value} value={value} sx={{ pl: 3, pr: 3,  "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.secondary.main,
                  color: "#fff",
                }}}>
                  {value}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Divider sx={{py: 2}}/>
            <Typography variant="h1" component="h2"  sx={{py: 2}}>
                Amenities - essentials
              </Typography>
            
              <FormGroup>
                  <FormControlLabel control={<Checkbox checked={kitchenCheck} onChange={handleKitchenChange}/>} label="Kitchen" /> 
                  <FormControlLabel control={<Checkbox checked={parkingCheck} onChange={handleParkingChange}/>} label="Parking" />
                  <FormControlLabel control={<Checkbox checked={balconyCheck} onChange={handleBalconyChange}/>} label="Balcony" />
                  <FormControlLabel control={<Checkbox checked={fridgeCheck} onChange={handleFridgeChange}/>} label="Fridge" />
                  <FormControlLabel control={<Checkbox checked={wifiCheck} onChange={handleWifiChange}/>} label="Wi-fi" />
                  <FormControlLabel control={<Checkbox checked={gardenCheck} onChange={handleGardenChange}/>} label="Garden" />
                  <FormControlLabel control={<Checkbox checked={animalsCheck} onChange={handleAnimalChange}/>} label="Animals admitted" />
                  <FormControlLabel control={<Checkbox checked={ovenCheck} onChange={handleOvenChange}/>} label="Oven" />
                  <FormControlLabel control={<Checkbox checked={hairdryerCheck} onChange={handleHairDryerChange}/>} label="Hairdryer" />
                  <FormControlLabel control={<Checkbox checked={tvCheck} onChange={handleTvChange}/>} label="Tv" />
                  <FormControlLabel control={<Checkbox checked={washingmachineCheck} onChange={handleWashingmachineChange}/>} label="Washingmachine" />
                  <FormControlLabel control={<Checkbox checked={airconditioningCheck} onChange={handleAirconditioningChange}/>} label="Air conditioning" />
                  <FormControlLabel control={<Checkbox checked={seaCheck} onChange={handleSeaChange}/>} label="Sea" />
                  <FormControlLabel control={<Checkbox checked={mountainCheck} onChange={handleMountainChange}/>} label="Mountain view" />
                 {/* <FormControlLabel required control={<Checkbox />} label="Required" />
                  <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
              </FormGroup>
            </Box>
          </DialogContent>
          <DialogActions sx={{ ...flexBetween, pl: 2.5, pr: 2.5}}>
            <Button variant="text" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleShowAccomodations}>
              Show accomodations
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};


/* 
const OptionsFilter = () => {

  // Icone per da selezionare/ selezionato
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//Selezione
const [open, setOpen] = React.useState(false);
const [guests, setGuests] = React.useState('');
const [beds, setBeds] = useState('');
const [bathrooms, setBathrooms] = useState('');

const handleGuestsChange = (event) => {
  setGuests(Number(event.target.value) || '');
};

const handleBedsChange = (event) => {
  setBeds(Number(event.target.value) || '');
};

const handleBathroomsChange = (event) => {
  setBathrooms(Number(event.target.value) || '');
};

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason !== 'backdropClick') {
    setOpen(false);
  }
};



  return (
    <Box 
    sx={{
      ...dFlex,
      ...flexBetween,
      minHeight: 70,
      paddingTop: 2,
      paddingBottom: 2,
      paddingX:6
    }}
  > 
    <div>
      <Button 
      variant="outlined"
      color="secondary"
      size="large"
      onClick={handleClickOpen}>Select numbers</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Guests</InputLabel>
              <Select
                native
                value={guests}
                onChange={handleGuestsChange}
                input={<OutlinedInput label="Guest" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Beds</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={beds}
                onChange={handleBedsChange}
                input={<OutlinedInput label="Beds" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Bathrooms</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={bathrooms}
                onChange={handleBathroomsChange}
                input={<OutlinedInput label="Bathrooms" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button 
          variant="text"
          color="secondary"
          onClick={handleClose}>Cancel</Button>
          <Button 
          variant="contained"
          color="secondary"
          onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={services}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="Services" placeholder="Add" />
      )}
     
    />
       <Button
        // onClick={handleFilters}
        variant="contained"
        color="secondary"
        size="large"
      
      >
        Filter results
      </Button>
    </Box>
  );
}

const services = [
  { title: 'kitchen', year: 1994 },
  { title: 'parking', year: 1972 },
  { title: 'balcony', year: 1974 },
  { title: 'fridge', year: 2008 },
  { title: 'wifi', year: 1957 },
  { title: "garden", year: 1993 },
  { title: 'animalsAdmitted', year: 1994 },
  {
    title: 'oven',
    year: 2003,
  },
  { title: 'hairdryer', year: 1966 },
  { title: 'tv', year: 1999 },
  {
    title: 'washingmachine',
    year: 2001,
  },
  {
    title: 'airconditioning',
    year: 1980,
  },
  { title: 'sea', year: 1994 },
  { title: 'montagna', year: 2010 },
 
];


 */

export default OptionsFilter;
