const { fetchEvents, fetchEvent, createEvent } = require("../controllers/event.controller");

const router = require("express").Router();

router.get("/", fetchEvents);
router.post("/", createEvent);
router.get("/:eventId", fetchEvent);

module.exports = router;
