import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FaFilter } from 'react-icons/fa';

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

// Dati dei filtri
const locationsTab = [
  { id: 1, title: "Sea", icon: <PiWavesLight size={24}/> },
  { id: 2, title: "Kitchen", icon: <PiCookingPotLight size={24}/> },
  { id: 3, title: "Mountains", icon: <PiMountainsLight size={24}/> },
  { id: 4, title: "Animals", icon: <PiPawPrintThin size={24}/> },
  { id: 5, title: "TV", icon: <PiTelevisionThin size={24}/> },
  { id: 6, title: "Balcony", icon: <PiPottedPlantThin size={24}/> },
  { id: 7, title: "Parking", icon: <RiParkingLine size={24}/> },
  { id: 8, title: "Wifi", icon: <CiWifiOn size={24}/> },
];

const OptionsFilter = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) =>
    setValue(newValue);

  return (
    <Container maxWidth='xl'>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        px: { xs: 0, md: 2 },
        alignItems: 'center',
        mt: 2,
        mb: 2,
      }}>
        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}>
          {locationsTab.map(tab => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.title}/>
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}>
            <FaFilter /> Filters
          </Button>
        
      </Box>
    </Container>
  );
}

export default OptionsFilter;
