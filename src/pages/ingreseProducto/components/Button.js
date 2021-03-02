import React, { useRef, useState, Component} from "react"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const outStyle={
  width:'80%',
  height:'30px',
  marginBottom:'10px',
  marginTop:'20px'
}
const btnStyle={
  width:'100%',
  height:'100%',
  borderRadius:'7px',
  background:'#680d0f',
  color:'white',
  fontFamily:'Roboto sans-serif',
  fontSize:'15px'
}

export default function Boton({ button_title,onClick}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }



  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={onClick}/>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"CUESTIONARIO"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ayúdenos a seguir mejorando
          </DialogContentText>
          <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={7}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    </div>
    
    
  )
}
