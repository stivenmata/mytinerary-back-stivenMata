import Itinerary from "../../models/Itinerary.js";

const likeItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Itinerary ID:", id);  // Log para depuración
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    res.json(updatedItinerary);
  } catch (error) {
    console.error("Error:", error);  // Log para depuración
    res.status(500).json({ message: error.message });
  }
};

export default likeItinerary;
