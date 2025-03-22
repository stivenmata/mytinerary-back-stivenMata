import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
  continent: { type: String },
  description: { type: String },
  currency: { type: String },
  phone: { type: String }, // Código de teléfono del país
  population: { type: Number }, // Número de habitantes
  area: { type: Number }, // Área en km²
  timezone: { type: String }, // Zona horaria
});

const City = mongoose.model("City", citySchema);

export default City;
