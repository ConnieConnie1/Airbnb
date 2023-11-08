import React from "react";
import Filter from "./Filter";
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

const Filters = () => {
  //creo un array
  const sorting = [
    { title: "Sea", icon: <PiWavesLight /> },
    { title: "Kitchen", icon: <PiCookingPotLight /> },
    { title: "Mountains", icon: <PiMountainsLight /> },
    { title: "Animals", icon: <PiPawPrintThin /> },
    { title: "TV", icon: <PiTelevisionThin /> },
    { title: "Balcony", icon: <PiPottedPlantThin /> },
    { title: "Parking", icon: <RiParkingLine /> },
    { title: "Wifi", icon: <CiWifiOn /> },
  ];
  
  return (
    <div className="filter__box">
      <div className="filter__box--elements">
        {sorting.map((obj, index) => (
          <Filter key={index} title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
