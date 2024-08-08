import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Images from "../Data";
import Coffee_11 from "../asset/Coffee_11.jpg";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../features/productSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
// mui
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// modal mui
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const ImageCarousel = () => {
  const [products, setProducts] = useState([]);
  const [viewproduct, setViewproduct] = useState({});
  const navigate = useNavigate()
  // mui
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleOpen = (item) => {
    setOpen(true);
    setViewproduct(item);
  };
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data =>
      setProducts(data)
    )
  },[])

  return (
    <>

<Button type="submit" variant="contained" color="primary" sx={{margin:"2rem"}} onClick={()=> navigate("/products-table")}>
          Add
        </Button>
      {/* <Carousel sx={{height:'40px'}}>
        {Images.map((item, i) => (
          <div key={i} >
            <img
              src={item.carouselImg}
              alt="Image"
            />
            <h1>{item.name}</h1>
          </div>
        ))}
      </Carousel> */}

      <div className="grid-container">
        {products.map((item,i)=>
  <Card key={item.id} sx={{ maxWidth: 345 }} className="grid-item">
      <CardMedia
        sx={{ height: 380, margin: 2 }}
        image={item.image}
        title= {item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {(item.description).slice(0,135)+"...."}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {item.price}rs
         ⭐{item.rating.rate}
         </Typography>
      </CardContent>
      <CardActions>
   
        <Button onClick={()=>handleOpen(item )}>View</Button>
      </CardActions>
    </Card>
)}
      </div>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          Loading...
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardMedia
              sx={{ height: 250, margin: 2 }}
              image={viewproduct.image}
              title={viewproduct.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {viewproduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {viewproduct.description}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {viewproduct.price}rs
                {/* ⭐{viewproduct.rating.rate} */}
              </Typography>
            </CardContent>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ImageCarousel;
