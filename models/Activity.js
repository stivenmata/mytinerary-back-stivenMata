import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  itineraryId: { type: mongoose.Schema.Types.ObjectId, ref: "Itinerary", required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true }
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
