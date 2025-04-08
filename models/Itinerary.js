import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  authorName: { type: String, required: true },
  authorPhoto: { type: String, required: true },
  price: { type: Number, min: 1, max: 5, required: true },
  duration: { type: Number, required: true }, // duración en horas
  likes: { type: Number, default: 0 },
  hashtags: [{ type: String }],
  comments: [
    {
      user: { type: String }, // más adelante puedes relacionar con un modelo User
      text: { type: String },
      date: { type: Date, default: Date.now }
    }
  ]
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;
