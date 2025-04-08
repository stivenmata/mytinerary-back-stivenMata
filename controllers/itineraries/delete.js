import Itinerary from "../../models/Itinerary.js";

const remove = async (req, res, next) => {
  try {
    const deleted = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Itinerary not found" });
    }
    res.status(200).json({ success: true, message: "Itinerary deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default { remove };
