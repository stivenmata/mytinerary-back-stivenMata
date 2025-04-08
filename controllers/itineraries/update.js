import Itinerary from "../../models/Itinerary.js";

const update = async (req, res, next) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItinerary) {
      return res.status(404).json({ success: false, message: "Itinerary not found" });
    }
    res.status(200).json({ success: true, data: updatedItinerary });
  } catch (error) {
    next(error);
  }
};

export default { update };
