import React, { useState, Fragment } from "react";
import Check from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import moment from "moment";
import {
  styled,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Typography,
  TextField,
  Autocomplete,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
const steps = ["information", "date", "configue"];

export default function StepsForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [eventState, setEventState] = useState({
    title: "",
    city: "",
    address: "",
    localization: "",
    description: "",
    pickedDate: new Date(),
    hasLimit: false,
    limit: -1,
    tags: [],
  });

  const parentCallBack = (event) => {
    console.log("event", event);
    setEventState({ ...eventState, [event.col]: event.value });
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (
        eventState.title !== ""
        // eventState.city !== "" &&
        // eventState.address !== "" &&
        // eventState.description !== ""
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 1) {
      if (eventState.pickedDate !== null) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 2) {
      if (eventState.title !== "") {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 3) {
      // setEventState({ ...eventState, hasLimit: value });
    }
    console.log("eventState", eventState);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleValideEvent = () => {
    setActiveStep(0);
  };

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  const QontoStepIcon = (props) => {
    const { active, completed, className } = props;
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}> </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment style={{ minHeight: "calc(100vh - 190px)" }}>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleValideEvent}>Enregister</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {activeStep === 0 && (
            <EventInfoForm
              parentCallBack={(data) => parentCallBack(data)}
              eventState={eventState}
            />
          )}
          {activeStep === 1 && (
            <CalendarForm
              parentCallBack={(data) => parentCallBack(data)}
              eventState={eventState}
            />
          )}
          {activeStep === 2 && (
            <ConfigueForm
              parentCallBack={(data) => parentCallBack(data)}
              eventState={eventState}
            />
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ ml: 3 }}
              startIcon={<ArrowCircleLeftRoundedIcon />}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              color={activeStep === steps.length - 1 ? "success" : "primary"}
              onClick={handleNext}
              sx={{ mr: 3 }}
              startIcon={
                activeStep === steps.length - 1 ? (
                  <SaveIcon />
                ) : (
                  <ArrowCircleRightRoundedIcon />
                )
              }
              variant="contained"
            >
              {activeStep === steps.length - 1 ? "FINISH" : "Next"}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", id: 1994 },
  { title: "The Godfather", id: 1972 },
  { title: "The Godfather: Part II", id: 1974 },
  { title: "The Dark Knight", id: 2008 },
  { title: "12 Angry Men", id: 1957 },
  { title: "Schindler's List", id: 1993 },
  { title: "Pulp Fiction", id: 1995 },
  { title: "Lord of the Rings: The Return of the King", id: 2003 },
];
const EventInfoForm = (props) => {
  const { city, title, address, localization, description } = props.eventState;
  const { parentCallBack } = props;

  const setCity = (event, value) => {
    console.log("value", value);
    parentCallBack({ col: "city", value });
  };

  return (
    <Box
      component="form"
      className="d-flex justify-content-around mt-5"
      style={{ minHeight: "calc(100vh - 190px)" }}
    >
      <div>
        <Box mt={"3rem"} sx={{ width: 500 }}>
          <TextField
            fullWidth
            label="Title"
            id="title"
            value={title}
            onChange={(event) =>
              parentCallBack({ col: "title", value: event.target.value })
            }
            required={true}
            error={false}
          />
        </Box>
        <Box mt={"3rem"} sx={{ width: 500 }}>
          <Autocomplete
            freeSolo
            id="city"
            disableClearable
            options={top100Films.map((option) => option.title)}
            getOptionLabel={(option) => option}
            onChange={setCity}
            value={city}
            renderInput={(params) => (
              <TextField
                {...params}
                label="City"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Box>
        <Box mt={"3rem"} sx={{ width: 500 }}>
          <TextField
            fullWidth
            label="Address"
            id="address"
            onChange={(event) =>
              parentCallBack({ col: "address", value: event.target.value })
            }
            value={address}
            required={true}
          />
        </Box>
        <Box mt={"3rem"} sx={{ width: 500 }}>
          <TextField
            fullWidth
            label="Localization"
            id="localization"
            onChange={(event) =>
              parentCallBack({ col: "localization", value: event.target.value })
            }
            value={localization}
          />
        </Box>
      </div>
      <div>
        <Box sx={{ mt: "8rem" }} noValidate autoComplete="off">
          <TextField
            id="description-field"
            label="Description"
            multiline
            fullWidth
            onChange={(event) =>
              parentCallBack({ col: "description", value: event.target.value })
            }
            value={description}
            sx={{ width: "50vh" }}
            rows={8}
            variant="standard"
          /> 
        </Box>
      </div>
    </Box>
  );
};

const CalendarForm = (props) => {
  const { pickedDate } = props.eventState;
  const { parentCallBack } = props;

  const currentDate = new Date();
  const tomorrow = new Date();
  const after60Days = tomorrow.setDate(currentDate.getDate() + 60);

  const handleChange = (date) => {
    const formatedDate = moment(date).format("YYYY-MM-DD hh:mm");
    console.log("picked date", formatedDate);
    parentCallBack({ col: "pickedDate", value: formatedDate });
  };

  return (
    <Box
      component="form"
      className="text-center"
      style={{ minHeight: "calc(100vh - 254px)" }}
      mt={"7rem"}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Date  Time picker"
          value={pickedDate}
          minDate={currentDate}
          maxDate={after60Days}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

const ConfigueForm = (props) => {
  const { hasLimit, limit,   } = props.eventState;
  const { parentCallBack } = props;

  return (
    <Box
      component="form"
      mt={"6rem"}
      style={{ minHeight: "calc(100vh - 254px)" }}
    >
      <Box className="d-flex justify-content-center">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={hasLimit}
                color="warning"
                onChange={(event) =>
                  parentCallBack({
                    col: "hasLimit",
                    value: event.target.checked,
                  })
                }
              />
            }
            label={"limit the event ?"}
          />
          {hasLimit && (
            <Box mt={"4rem"}>
              <TextField
                id="limit-number"
                label="Limit"
                type="number"
                value={limit}
                InputLabelProps={{
                  shrink: true,
                  min: 1,
                }}
              />
            </Box>
          )}
        </FormGroup>
      </Box>

      <Box mt={"4rem"} style={{ marginLeft: "30%", marginRight: "30%" }}>
        <Autocomplete
          multiple
          limitTags={2}
          id="limit-tags"
          options={top100Films} 
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="limitTags" placeholder="Favorites" />
          )}
        />
      </Box>
    </Box>
  );
};
