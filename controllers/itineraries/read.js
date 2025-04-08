import Itinerary from "../../models/Itinerary.js";

const getAll = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find().populate("city");
    res.status(200).json({ success: true, data: itineraries });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id).populate("city");
    if (!itinerary) {
      return res.status(404).json({ success: false, message: "Itinerary not found" });
    }
    res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    next(error);
  }
};

const getByCity = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find({ city: req.params.cityId });
    res.status(200).json({ success: true, data: itineraries });
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, getByCity };
