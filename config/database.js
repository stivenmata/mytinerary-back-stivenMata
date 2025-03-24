import mongoose from "mongoose";

let url = process.env.URI_MONGO;
console.log("Conectando a:", url);

mongoose
  .connect(url)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection error:", error));