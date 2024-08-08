// mui
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// modal mui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import "../App.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

// import React from 'react'

function ModalComp({viewproduct , openmodal,handleClose}) {


  return (
    <Modal
        open={openmodal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
        title= {viewproduct.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {viewproduct.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {(viewproduct.description)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {viewproduct.price}rs
         {/* ⭐{viewproduct.rating.rate} */}
         </Typography>
      </CardContent>
        </Box>
      </Modal>
  )
}

export default ModalComp