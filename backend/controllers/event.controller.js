const Event = require("../models/Event");

const createEvent = async (req, res) => {
  let { title, description, address, eventAt, limit, tags } = req.body;
  const user = req.user;
  try {
    const event = await Event.create({
      user,
      title,
      description,
      city,
      address,
      localization,
      eventAt,
      limit,
      tags,
    });

    res
      .status(200)
      .json({ success: event ? true : false, item: event || null });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const fetchEvent = async (req, res) => {
  let { eventId } = req.params;
  const event = await Event.findById(eventId);
  if (event) res.status(200).json({ success: true, item: event });
  else res.status(400).json({ success: false, message: "Event not found" });
};

const fetchEvents = async (req, res) => {
  let { latest } = req.query;
  latest = latest ? latest : false;
  let events = [];

  if (latest) events = await Event.find({}).sort({ createdAt: -1 });
  else events = await Event.find({}).sort({ eventAt: -1 });

  if (events && events.length > 0)
    res.status(200).json({ success: true, items: events });
  else res.status(400).json({ success: false, message: "no Events found" });
};

module.exports = {
  createEvent,
  fetchEvent,
  fetchEvents,
  
}