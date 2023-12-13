import React from "react";


//Importo Icone
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

//Dati dei filtri: id, name e icona
export const LocationsTab = [
    { id: 1, title: "Sea", icon: <PiWavesLight size={24}/> },
    { id: 2, title: "Kitchen", icon: <PiCookingPotLight size={24}/> },
    { id: 3, title: "Mountains", icon: <PiMountainsLight size={24}/> },
    { id: 4, title: "Animals", icon: <PiPawPrintThin size={24}/> },
    { id: 5, title: "TV", icon: <PiTelevisionThin size={24}/> },
    { id: 6, title: "Balcony", icon: <PiPottedPlantThin size={24}/> },
    { id: 7, title: "Parking", icon: <RiParkingLine size={24}/> },
    { id: 8, title: "Wifi", icon: <CiWifiOn size={24}/> },
  ];
  


