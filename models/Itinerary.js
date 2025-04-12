import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  title: { type: String, required: true },
  authorName: { type: String, required: true },
  authorPhoto: { type: String, required: true },
  placePhoto: { type: String, required: true },
  price: { type: Number, required: true, min: 1, max: 5 },
  duration: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  hashtags: [{ type: String }],
  
}, { timestamps: true });

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;
