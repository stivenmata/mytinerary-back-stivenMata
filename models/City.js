import mongoose from "mongoose";

const citySchema = new mongoose.Schema({

  name: { type: String, required: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
  continent: { type: String },
  description: { type: String },
  currency: { type: String },
  phone: { type: String }, 
  population: { type: Number }, 
  area: { type: Number }, 
  timezone: { type: String }, 
});

const City = mongoose.model("City", citySchema);

export default City;
