import React, { forwardRef, } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
} from "@mui/material";
import StepsForm from "./StepsForm";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalAction } from "../actions/meetingActions";


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const meetingReducer = useSelector((state) => state.meetingReducer);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(handleModalAction(false))

  const handleEnregisterModal = ({ data }) => {
    console.log("handleEnregisterModal", data);
    // TODO: dispatch action to save data
    handleClose()
  }


  return (
    <Dialog
      fullScreen
      open={meetingReducer.openModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Event Informations
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <StepsForm handleEnregisterModal={handleEnregisterModal} />
    </Dialog>
  );
}
