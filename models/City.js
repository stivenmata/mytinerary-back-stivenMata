import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // Identificador único (ej: ID_NEW_YORK)
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
