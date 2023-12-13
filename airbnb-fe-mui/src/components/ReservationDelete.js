import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ReservationDelete = ({ success }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (success) {
      setMessage('Prenotazione cancellata con successo!');
      setSeverity('success');
      setOpen(true);
    } else {
      setMessage('Errore durante la cancellazione della prenotazione.');
      setSeverity('error');
      setOpen(true);
    }
  }, [success]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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

export default ReservationDelete;
