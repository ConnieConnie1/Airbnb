import {React, useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import isEmpty from 'lodash/isEmpty';

const ReservationConfirmation = ({ success, response }) => {
  const [open, setOpen] = useState(false); //viene mostrato all'utente solo se è true
  const [severity, setSeverity] = useState("success"); //stringa che descrive il tipo di stringa da mostrare all'utente
  const [message, setMessage] = useState(""); //Stringa che contiene il testo del messaggio

  

  useEffect(() => {
    if (success) {
      setMessage("Prenotazione avvenuta con successo!");
      setSeverity("success");
      setOpen(true);
    } else if (response === '') {
      setMessage("C'è già una prenotazione per queste date!");
      setSeverity("error");
      setOpen(true);
    } else {
      setMessage("Prenotazione fallita, riprova più tardi.");
      setSeverity("error");
      setOpen(true);
    }
  }, [success, response]);
  
  

  const handleClose = (event, reason) => {
    //Gestione della chiusura di Snackbar. Quando utente chiude o scade il tempo. 
    if (reason === "clickaway") {
      // si verifica la ragione della chiusura
      return;
    }
    setOpen(false); // quando false, non è più visibile
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ReservationConfirmation;
