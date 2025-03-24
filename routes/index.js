import express from "express";
import citiesRouter from "./city.routes.js"; 

const router = express.Router();

router.use("/cities", citiesRouter); 

export default router;
