import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const events = [
  {
    title: "Faro Power One Day Woman Retreat",
    date: "Sunday December 19, 2021 12:00 to 14:00 CEST",
    location: "casablanca",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ea?",
    image:
      "https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.6435-9/162079470_234773188303514_4666733320420761186_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=PcrtDl4HQzkAX9y9uWE&_nc_ht=scontent.fcmn2-2.fna&oh=00_AT_Wec7Aw-JHKwDEQLOmHhMbuyM7E2A-5qIh8xC5ymYDhA&oe=61DE2D94",
    id: 1,
  },
  {
    title: "Descuartizando historias de usuarios",
    date: "martes, 14 de diciembre de 2021 18:00",
    location: "rabat",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ea?",
    image:
      "https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.6435-9/162079470_234773188303514_4666733320420761186_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=PcrtDl4HQzkAX9y9uWE&_nc_ht=scontent.fcmn2-2.fna&oh=00_AT_Wec7Aw-JHKwDEQLOmHhMbuyM7E2A-5qIh8xC5ymYDhA&oe=61DE2D94",
    id: 2,
  },
];

export default function EventList() {
  return (
    <Card
      sx={{
        display: "flex",
        my: 2,
        ml: 10,
        mr: 45,
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
    >
      <Box component="div">
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={events[0].image}
          alt="Live from space album cover"
        />
      </Box>
      <Box component="div" sx={{ width: "100%" }}>
        <div className="d-flex justify-content-between align-items-start ">
          <div>div1</div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="more-vert-icon"
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </Box>
    </Card>
  );
}


