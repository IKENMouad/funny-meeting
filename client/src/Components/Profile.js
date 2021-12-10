import React, { useState, useEffect } from "react";
import "../assets/css/profile.css";

function Profile() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const mockEvents = [
      {
        image: "./images/profile/assassins.png",
        title: "Assassins Creed Valhalla",
        tags: "PS5 Version",
        rating: "60%",
      },
      {
        image: "./images/profile/sackboy.png",
        title: "Sackboy A Great Advanture",
        tags: "PS5 Version",
        rating: "60%",
      },
      {
        image: "./images/profile/spiderman.png",
        title: "Spiderman Miles Morales",
        tags: "PS5 Version",
        rating: "60%",
      },
    ];
    setEvents([...mockEvents, ...mockEvents]);
  }, []);

  return (
    <div className="profile">
      <section className="glass">
        <div className="dashboard">
          <div className="user">
            <img src="./images/profile/avatar.png" alt="" />
            <h3>IKEN Mouad </h3>
            <p>Pro Member</p>
          </div>
          <div className="links">
            <div className="link">
              <img
                className="link-image"
                src="./images/profile/twitch.png"
                alt=""
              />
              <h2 className="link-title cursor-pointer">Streams</h2>
            </div>
            <div className="link">
              <img
                className="link-image"
                src="./images/profile/steam.png"
                alt=""
              />
              <h2 className="link-title cursor-pointer">Games</h2>
            </div>
            <div className="link">
              <img
                className="link-image"
                src="./images/profile/upcoming.png"
                alt=""
              />
              <h2 className="link-title cursor-pointer">New</h2>
            </div>
            <div className="link">
              <img
                className="link-image"
                src="./images/profile/library.png"
                alt=""
              />
              <h2 className="link-title cursor-pointer">Library</h2>
            </div>
          </div>
          {/* <div className="pro">
              <h2>Join pro for free games.</h2>
              <img src="./images/profile/controller.png" alt="" />
            </div> */}
        </div>
        <div className="games">
          <div className="status">
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <div className="cards">
            {events &&
              events.map((event, index) => (
                <div className="card" key={index}>
                  <img src={event.image} alt={event.title} />
                  <div className="card-info">
                    <h2>{event.title}</h2>
                    <p>{event.tags}</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage"> {event.rating} </h2>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
