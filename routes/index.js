import express from "express";
import citiesRouter from "./city.routes.js";
import itinerariesRouter from "./itineraries.routes.js"; 

const router = express.Router();

router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter); 

export default router;
