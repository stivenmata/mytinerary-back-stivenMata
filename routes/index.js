import express from "express";
import citiesRoutes from "./cities.js";

const router = express.Router();

router.use("/cities", citiesRoutes);

export default router;
