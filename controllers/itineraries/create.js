import Itinerary from "../../models/Itinerary.js";

const create = async (req, res, next) => {
  try {
    const newItinerary = await Itinerary.create(req.body);
    res.status(201).json({ success: true, data: newItinerary });
  } catch (error) {
    next(error);
  }
};

const createMany = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.insertMany(req.body);
    res.status(201).json({ success: true, data: itineraries });
  } catch (error) {
    next(error);
  }
};

export default { create, createMany };
